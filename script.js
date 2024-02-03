// F12 to open the developer console. Make sure the console tab is selected.
// you will probably have to type "allow pasting" to ... allow pasting. This was only tested in Chrome, admittedly. 
// just paste into the console and hit enter.
// to stop it, just refresh.
// this is just an initial script that is completely unbiased about what ad accounts it blocks, I'll work on whitelisting as well at some point.

let theFunc = () => {
    let adSpan = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Ad'));

    if (adSpan) {
        let svgParent = adSpan.parentNode.parentNode.children[1]?.querySelector('svg')?.parentNode;
        if (svgParent) {
            console.log('clicky the dots');
            svgParent.click();
        }

        let blockSpan = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Block'));
        if (blockSpan) {
            console.log('smash that block button');
            blockSpan.click();
        }

        let confirmDivChild = document.querySelector('div[data-testid="confirmationSheetConfirm"]')?.firstChild.firstChild.firstChild;
        if (confirmDivChild) {
            console.log('yeah, I wanna');
            confirmDivChild.click();
        }
    }

    setTimeout(theFunc, 3000);
}

theFunc();
