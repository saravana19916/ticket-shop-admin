//LTR TO RTL
export const LtrtoRtl = () => {
    document.querySelector("body")?.classList.add("rtl");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${import.meta.env.BASE_URL === 'production' ? "/" : "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"}`)
    document.querySelector("body")?.classList.remove("ltr");

    localStorage.setItem("sashrtl", 'true');
    localStorage.removeItem("sashltr");
};
//RTL TO LTR
export const RtltoLtr = () => {
    document.querySelector("body")?.classList.add("ltr");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${import.meta.env.BASE_URL === 'production' ? "/" : "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}`)
    document.querySelector("body")?.classList.remove("rtl");
    localStorage.setItem("sashltr", 'true');
    localStorage.removeItem("sashrtl");
};


// Color theme
export const LightTheme = () => {

    document.querySelector("body")?.classList.add("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");

    localStorage.removeItem('Sashdarktheme');
    localStorage.setItem("sashlighttheme", 'true');

    
  let myonoffswitch1 = document.querySelector("#myonoffswitch1") as HTMLInputElement
  myonoffswitch1.checked = true;
};

export const dark = () => {
    
    document.querySelector("body")?.classList.add("dark-mode");
    document.querySelector("body")?.classList.remove("light-mode");

    localStorage.setItem("sashdarktheme", 'true');
    localStorage.removeItem('sashlightmode');

    let myonoffswitch2 = document.querySelector("#myonoffswitch2") as HTMLInputElement
    myonoffswitch2.checked = true;
    
};


export function checkHoriMenu() {
    let menuWidth: any = document.querySelector(".horizontal-main");
    let menuItems: any = document.querySelector(".side-menu");
    let mainSidemenuWidth: any = document.querySelector(".main-sidemenu");

    let menuContainerWidth =
        menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])
    );
    let marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
    );
    let check =
        menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector(".app")?.classList.contains("ltr")) {
        menuItems.style.marginRight = 0;
    } else {
        menuItems.style.marginLeft = 0;
    }

    if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        document.querySelector(".slide-leftRTL")?.classList.add("d-none");
        document.querySelector(".slide-rightRTL")?.classList.add("d-none");
    } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    } else if (marginLeftValue !== -check || marginRightValue !== -check) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
    if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
        document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    }
    if (marginLeftValue === 0 || marginRightValue === 0) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    }
    if (marginLeftValue !== 0 || marginRightValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
        document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
}

// RESET DATA

export function resetData() {
    let lighttheme = document.querySelector("#myonoffswitch1") as HTMLInputElement
    lighttheme.checked = true;   //lighttheme
    let Ltr = document.querySelector("#myonoffswitch23") as HTMLInputElement
    Ltr.checked = true;   //lighttheme
    document.querySelector("body")?.classList.remove("dark-mode");


    document.querySelector("body")?.classList.add("ltr");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.getElementById("bootstrapLink")?.setAttribute("href", `${import.meta.env.BASE_URL === 'production' ? "/" : "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}`)
    document.querySelector("body")?.classList.remove("rtl");
}

//   LOCAL STORAGE BACK-UP

export function localStorageBackUp1() { 
    (localStorage.sashrtl) && LtrtoRtl ();
    (localStorage.sashltr) && RtltoLtr ();
    (localStorage.sashdarktheme) && dark ();
}
