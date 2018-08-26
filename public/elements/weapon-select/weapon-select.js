/* global SplitText */
(function () {
	'use strict';

	var jsonData;
	class weaponSelect extends Polymer.Element
	{
	    static get is()
	    {
			return 'weapon-select';
		}

        static get properties()
        {
			return {
				weapons: {
                    type: Array,
                    value: []
                },
			};
		}
	    ready()
	    {
			super.ready();

			var jsonFile = 'jsons/weapons.json';
            $.ajax({
                url: jsonFile,
                async: false,
                dataType: 'json',
                success: function (data) {
					jsonData = data;
					
                }
            });
			this.weapons = jsonData;
            
		}
		_assign() {
			var assignedWeapon = jsonData.find(weapon => {
				if (weapon.name == this.selectedWeapon)
					return true;
				return false;
			});
			this.$.weaponValue.innerHTML = assignedWeapon.name;
			this.$.apValue.innerHTML = assignedWeapon.atkPower;
			this.$.durValue.innerHTML = assignedWeapon.durability;
			this.$.maxdmgValue.innerHTML = assignedWeapon.atkPower * assignedWeapon.durability;
				
		}

	   
	}

	customElements.define(weaponSelect.is, weaponSelect);

})();

