import {
  getTotalEgg,
  getListReload,
  collect,
  layEgg,
  hatchEgg,
  collectDuck,
  removeDuck,
  maxDuck,
  checkIn,
} from "./api";

interface Duck {
  id: string;
  duck_id: string; // response api collect duck;
  metadata: {
    arm_rare: number;
    body_rare: number;
    head_rare: number;
  };
}

let listNestRes: { id: string; type_egg: number; finish_time: number }[] = [];
let listDuck: Duck[] = [];
let maxDuckNum: number = 0;

const getTotalEggFn = () => {
  return getTotalEgg()
    .then((res) => {
      const listData = res?.data?.data.data || [];
      const eggData = listData.find((item: any) => item?.symbol === "EGG");
      if (eggData) console.log(`Đã thu thập ${Number(eggData.balance)} trứng!`);
    })
    .catch((err) => {
      console.log(err);
      getTotalEggFn();
    });
};

const getListReloadFn = () => {
  getListReload()
    .then((res) => {
      const dataRes = res.data.data;
      listNestRes = structuredClone(dataRes.nest);
      listDuck = structuredClone(dataRes.duck);
      console.log(
        "Danh sách ids các ổ: ",
        listNestRes.map((d: any) => d.id)
      );
      console.log(`Tổng số lượng vịt: `, listDuck?.length);

      listNestRes?.length
        ? collectAndHatch()
        : setTimeout(() => getListReloadFn(), 2e3);
    })
    .catch((err) => {
      console.log(err);
      getListReloadFn();
    });
};

const collectAndHatch = () => {
  const egg = listNestRes[0];
  if (egg) {
    egg.type_egg > 2
      ? listDuck.length < maxDuckNum
        ? setTimeout(() => hatchEggFn(egg.id), 1e3)
        : setTimeout(() => handleCollect(egg), 1e3)
      : setTimeout(() => handleCollect(egg), 1e3);
  } else setTimeout(() => getListReloadFn(), 1e3);
};

const handleCollect = (egg: {
  id: string;
  type_egg: number;
  finish_time: number;
}) => {
  if (egg.finish_time) collectDuckFn(egg.id);
  else if (egg.type_egg) setTimeout(() => collectFn(egg.id), 1e3);
  else {
    listNestRes = listNestRes.filter((n) => n.id !== egg.id);
    setTimeout(() => collectAndHatch(), 1e3);
  }
};

const collectFn = (nest_id: string) => {
  collect(nest_id)
    .then(() => {
      console.log(`Thu thập trứng ${nest_id} thành công!`);
      layEggFn(nest_id);
    })
    .catch((err) => {
      console.log(err?.response?.data?.error_code);
      setTimeout(() => collectFn(nest_id), 1e3);
    });
};

const layEggFn = (nest_id: string) => {
  console.log(`------Tìm vịt để đẻ!--------`);
  layEgg(
    nest_id,
    listDuck.map((d) => d.id)
  )
    .then(() => {
      getTotalEggFn().then(() => {
        listNestRes = listNestRes.filter((n) => n.id !== nest_id);
        setTimeout(() => collectAndHatch(), 1e3);
      });
    })
    .catch((err) => {
      console.log(err?.response?.data?.error_code);
      layEggFn(nest_id);
    });
};

const hatchEggFn = (nest_id: string) => {
  hatchEgg(nest_id)
    .then(() => {
      console.log(`Trứng ${nest_id} đang ấp!`);
      setTimeout(() => collectDuckFn(nest_id), 4e3);
    })
    .catch((err) => {
      console.log(err?.response?.data?.error_code);
      hatchEggFn(nest_id);
    });
};

const collectDuckFn = (nest_id: string) => {
  collectDuck(nest_id)
    .then((res) => {
      console.log(`Nhận vịt đã ấp từ ${nest_id}!`);
      listNestRes = listNestRes.filter((n) => n.id !== nest_id);
      const duck: Duck = res?.data?.data;
      const { arm_rare, body_rare, head_rare } = duck?.metadata || {};
      if (
        (arm_rare > 1 && body_rare > 1) ||
        (arm_rare > 1 && head_rare > 1) ||
        (body_rare > 1 && head_rare > 1) ||
        (arm_rare > 1 && body_rare > 1 && head_rare > 1) ||
        arm_rare > 2 ||
        body_rare > 2 ||
        head_rare > 2
      ) {
        console.log(`********** Vịt xịn !!!! ***********`);
        setTimeout(() => collectAndHatch(), 1e3);
      } else setTimeout(() => removeDuckFn(duck?.duck_id), 1e3);
    })
    .catch((err) => {
      console.log(err?.response ? err?.response?.data?.error_code : err);
      collectDuckFn(nest_id);
    });
};

const removeDuckFn = (duck_id: string) => {
  removeDuck(duck_id)
    .then(() => {
      console.log(
        `///////// Xoá con vịt ${duck_id} vừa nhận như quần què! /////////`
      );
      setTimeout(() => collectAndHatch(), 1e3);
    })
    .catch((err) => {
      console.log(err?.response ? err?.response?.data?.error_code : err);
      removeDuckFn(duck_id);
    });
};

const checkInFn = () => {
  checkIn()
    .then(() => {
      setTimeout(() => {
        checkInFn();
      }, 60 * 60 * 24 * 1000);
    })
    .catch((err) => {
      console.log(err);
      //   checkInFn();
    });
};

const init = () => {
  maxDuckNum = 17;
  getListReloadFn();
  // checkInFn();
  // maxDuck()
  //   .then((res: any) => {
  //     maxDuckNum = Number(res?.data?.data.max_duck);
  //     getListReloadFn();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     init();
  //   });
};

init();
