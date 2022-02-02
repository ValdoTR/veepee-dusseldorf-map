/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

const zoneList: any = {
    popupCrackTheCode: {
        message: 'Congrats, you just found the cartwheels, click to discover the riddle of the lock 3', 
        buttons: [
            {
                label: "It's not for me",
                className: "popUpElement",
                callback: (popupValue: any) => {
                    popupValue.close();
                }
            },
            {
                label: "Challenge accepted!",
                className: "popUpElement",
                callback: (popupValue: any) => {
                    WA.nav.openCoWebSite('https:\/\/valdotr.github.io\/veepee-dusseldorf-map\/src\/assets\/CROSSWORD-GAME.pdf');
                    popupValue.close();
                }
            },
        ]
    }
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const index = zoneListArray[i];
    let popup: any = null;
    WA.room.onEnterZone(index, () => {
        popup = WA.openPopup(`${index}`, zoneList[index].message, zoneList[index].buttons);
    });
    WA.room.onLeaveZone(index, () => {
        popup.close();
        WA.closeCoWebSite();
    });
}