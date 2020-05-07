let cate_sub = document.getElementsByClassName("cate-sub-wrapper");

function openSidebar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("main-content").style.marginLeft = "300px";
    document.getElementById("sidebar-button").style.marginLeft = "253px";
    for (let index = 0; index < cate_sub.length; index++) {
        const element = cate_sub[index];
        element.style.marginLeft = "32px";
    }
    toggleSidebar();
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "50px";
    document.getElementById("main-content").style.marginLeft = "50px";
    document.getElementById("sidebar-button").style.marginLeft = "5px";
    for (let index = 0; index < cate_sub.length; index++) {
        const element = cate_sub[index];
        element.style.marginLeft = "0";
    }
    toggleSidebar();
}

// function toggleCollapsibleIcons(){
//     let collapsible_icons = document.getElementsByClassName("sidebar-cate-collapsible-icons");
//     if(collapsible_icons === "\f150"){
//         for (let index = 0; index < collapsible_icons.length; index++) {
//             const element = collapsible_icons[index];
//             element.setAttribute("class", "sidebar-cate-collapsible-icons fa fa-caret-square-o-down");
//         }
//     }
// }

function toggleSidebar() {
    let sidebar_button = document.getElementById("sidebar-button").textContent;
    let cate_names = document.getElementsByClassName("sidebar-cate-names");
    let cate_sub_names = document.getElementsByClassName("sidebar-cate-sub-names");
    let collapsible_icons = document.getElementsByClassName("sidebar-cate-collapsible-icons");
    // khi đóng sidebar
    if (sidebar_button === "≪") {
        document.getElementById("sidebar-button").setAttribute("onclick", "openSidebar()");
        for (let index = 0; index < cate_names.length; index++) {
            const element = cate_names[index];
            element.style.display = "none";
        }
        for (let index = 0; index < cate_sub_names.length; index++) {
            const element = cate_sub_names[index];
            element.style.display = "none";
        }
        for (let index = 0; index < collapsible_icons.length; index++) {
            const element = collapsible_icons[index];
            element.style.display = "none";
        }
        setTimeout(function myFunction() {
            document.getElementById("sidebar-button").innerHTML = "&NestedGreaterGreater;";
        }, 400);
    }
    // khi mở sidebar
    else {
        document.getElementById("sidebar-button").setAttribute("onclick", "closeSidebar()");
        setTimeout(function myFunction() {
            for (let index = 0; index < cate_names.length; index++) {
                const element = cate_names[index];
                element.style.display = "inline";
            }
            for (let index = 0; index < cate_sub_names.length; index++) {
                const element = cate_sub_names[index];
                element.style.display = "inline";
            }
            for (let index = 0; index < collapsible_icons.length; index++) {
                const element = collapsible_icons[index];
                element.style.display = "inline-flex";
            }
            document.getElementById("sidebar-button").innerHTML = "&NestedLessLess;";
        }, 400);
    }
}
