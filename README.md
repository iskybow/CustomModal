# CustomModal Docs

**HTML code**
```
<button class="jsOpenModal">Click to open modal</button>
```
```
<div class="jsModal" style="display: flex; flex-direction: column; align-items: center; width: 250px;">
    CONTENT
</div>
```

**Usage plugin**
```
$(".jsOpenModal").customModal({
    btnOpenModal: '.jsOpenModal', // button class to open modal
    modalBlock: '.jsModal', // block class
    customClass: 'custom-class', // set custom class to customize your modal
    speedOpenModal: 500, // set open and close modal animate
    btnClose: true, // show or hide modal close button
    overlayClose: false, // close or not by overlay
    overlayShow: true, // show or hide modal overlay
    modalShow: 'top' // fade (default), top, right, bottom, left
});
```
