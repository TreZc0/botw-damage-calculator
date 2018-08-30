/* global SplitText */
(function () {
	'use strict';
	let allWeapons;
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
				selectedFilter: {
					type: String,
					observer: "_selectedFilter",
					notify: true
				},
				weaponData: {
					type: Array,
					notify: true
				}
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
			allWeapons = jsonData.onehanders.concat(jsonData.twohanders).concat(jsonData.spears).concat(jsonData.bows);
			allWeapons.sort(function(a, b){
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			})
			this.weapons = allWeapons;
		}
		_selectedFilter (selected, previous) {
			switch(selected) {
				case "all":
					this.weapons = allWeapons;
					this.$.arrows.style.display = "initial";
					this.$.arrow.style.display = "initial";
					this.$.hs.style.display = "initial";
					this.$.sa.style.display = "initial";
				break;

				case "onehanders":
					this.weapons = jsonData.onehanders;
					this.$.arrows.style.display = "none";
					this.$.arrow.style.display = "none";
					this.$.hs.style.display = "none";
					this.$.sa.style.display = "initial";
				break;

				case "twohanders":
					this.weapons = jsonData.twohanders;
					this.$.arrows.style.display = "none";
					this.$.arrow.style.display = "none";
					this.$.hs.style.display = "none";
					this.$.sa.style.display = "initial";
				break;

				case "spears":
					this.weapons = jsonData.spears;
					this.$.arrows.style.display = "none";
					this.$.arrow.style.display = "none";
					this.$.hs.style.display = "none";
					this.$.sa.style.display = "initial";
				break;

				case "bows":
					this.weapons = jsonData.bows;
					this.$.arrows.style.display = "initial";
					this.$.arrow.style.display = "initial";
					this.$.hs.style.display = "initial";
					this.$.sa.style.display = "none";
				break;
			}
		  }

		_assign() {
			var assignedWeapon = this.weapons.find(weapon => {
				if (weapon.name == this.selectedWeapon)
					return true;
				return false;
			});
			this.$.weaponValue.innerHTML = assignedWeapon.name;
			var attackPower = assignedWeapon.atkPower;
			var headshot = false;
			if (this.$.hs.checked)
				headshot = true;

			var stealth = false;
			if (this.$.sa.checked)
				stealth = true;
			if (assignedWeapon.name.includes("Bow")) {
				this.$.arrow.style.display = "initial";
				this.$.arrowValue.innerHTML = this.selectedArrows;
				this.$.hs.style.display = "initial";
				this.$.sa.style.display = "none";
				stealth = false;
			}	
			else {
				this.$.hs.style.display = "none";
				this.$.sa.style.display = "initial";
				this.$.arrow.style.display = "none";
				this.selectedArrows = "Normal";
				headshot = false;
			}
			this.weaponData = {"name": assignedWeapon.name, "atk": attackPower, "dur": assignedWeapon.durability, "arrows": this.selectedArrows, "maxDmg": attackPower * assignedWeapon.durability, "headshot": headshot, "stealth": stealth };
			this.$.apValue.innerHTML = attackPower;
			this.$.durValue.innerHTML = assignedWeapon.durability;
				this.$.maxdmgValue.innerHTML = assignedWeapon.atkPower * assignedWeapon.durability;


				
		}

	   
	}

	customElements.define(weaponSelect.is, weaponSelect);

})();

