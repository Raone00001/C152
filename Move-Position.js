// Creating a customized for changing position
AFRAME.registerComponent('move-on-click',{
    schema:{
        moveY: {type: "number", default: 1}
    },
    tick: function() {
        this.data.moveY = this.data.moveY + 0.01
        var pos = this.el.getAttribute('position'); // Getting the position attribute and storing it (el = elements)
        pos.y = this.data.moveY // Setting the initial position to the obj (moving_box)
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z}); // Setting and updating the positions
    }   
});

// Creating a customized for camera changing position
AFRAME.registerComponent('camera-zoom-out',{
    schema:{
        moveZ: {type: "number", default: 10}
    },
    tick: function() {
        this.data.moveZ = this.data.moveZ + 0.01
        var pos = this.el.getAttribute('position'); // Getting the position attribute and storing it (el = elements)
        pos.z = this.data.moveZ // Setting the initial position to the obj (moving_box)
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z}); // Setting and updating the positions
    }   
});

// Creating a customized for falling down
AFRAME.registerComponent('fall-down',{
    schema:{
        moveY: {type: "number", default: 0}
    },
    tick: function() {

        window.addEventListener("click", (e) => {
            this.data.moveY = this.data.moveY - 0.01
        });

        var pos = this.el.getAttribute('position'); // Getting the position attribute and storing it (el = elements)
        pos.y = pos.y + this.data.moveY // Setting the initial position to the obj (moving_box)
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z}); // Setting and updating the positions
    }   
});