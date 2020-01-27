const navArray = [
    { id: "myitems", label: "My Items", parentId: "root" },
    { id: "layouts", label: "Layouts", parentId: "myitems" },
    { id: "plots", label: "Plots", parentId: "myitems" },
    { id: "tables", label: "Tables", parentId: "myitems" },
    { id: "overlay-plot-dmx", label: "DMX Overlay Plot", parentId: "plots" }
];

renderNav = function(curNavId) {
    let arr = [];
    // Get parents of curNav
    let parentArr = getParents(curNavId);

    // Get entry for curNavId

    // Does curNavId have children?
    //   Yes: get children and append
    let childrenArr = getChildren(curNavId);
    if (childrenArr.length > 0) {
        // Has children, append to arr
    } else {
        // No children, just render items
    }
    //   No: get children of curNavId's parentId
    console.log(childrenArr);
    // Expects a
    $nav = document.getElementById('nav');

    for (let i = 0; i < navArray.length; i++) {
        let niObj = navArray[i];
        let $ni = document.createElement('div');
        $ni.addEventListener("click", function () {
            alert("Hello World! " + niObj.id);
        });
        $ni.innerText = niObj.label;
        if (niObj.id === curNavId) {
            $ni.className = '--cur-nav';
        }
        $nav.appendChild($ni);
    }



    //
    // var aTag = document.createElement('a');
    // aTag.setAttribute('href',"yourlink.htm");
    // aTag.innerText = "link text";
    // mydiv.appendChild(aTag);


    //$nav.appendChild = 'foo?';
};

getParents = function(navId) {
    // Given a navId, find its parent by calling getParent
    console.log('Getting parents of',navId);
    let parArray = [];
    let o = getParent(navId);
    console.log('parentId:',o.parentId);
    while (o.parentId !== 'root') {
        parArray.push(getParent(o.parentId));
        o = getParent(o.parentId);
        console.log('in getParents loop',o);
    }
    console.log(parArray);
};

getParent = function(id) {
    let parentId = navArray.find(o => o.id === id).parentId;
    console.log(id, 'has a parent:', parentId);
    let o = navArray.find(o => o.id === parentId);
    console.log('and that parent is',o);
    return o;
};

getChildren = function(navId) {
    return navArray.filter(o => o.parentId === navId);
};
