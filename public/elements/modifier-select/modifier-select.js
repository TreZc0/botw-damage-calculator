/* global SplitText */
(function () {
	'use strict';
let atkValue = 0;
let specialValue = "none";
	class modifierSelect extends Polymer.Element
	{
	    static get is()
	    {
			return 'modifier-select';
		}

        static get properties()
        {
			return {
				enemies: {
                    type: Array,
                    value: []
				},
				selectedAtkMod: {
					type: String,
					observer: "_selectedATK",
					notify: true
				},

				selectedSpecial: {
					type: String,
					observer: "_selectedSpecial",
					notify: true
				},
				modifierData: {
					type: Array,
					notify: true
				}
			};
		}
	    ready()
	    {
			super.ready();            
		}
		_selectedATK(selected,previous) {
			atkValue = selected;
		}

		_selectedSpecial(selected,previous) {
			specialValue = selected;
		}

		_assign() {
			this.$.atkBonusValue.innerHTML = "+ " + this._enteredATKBonus + " damage";
			this.$.durValue.innerHTML = "+ " + this._enteredExtraHits + " hits";
			this.$.specialValue.innerHTML = specialValue;
			this.modifierData = {"atkMod": atkValue, "atkBonus": this._enteredATKBonus, "durMod": this._enteredExtraHits, "special": specialValue};
				
		}

	   
	}

	customElements.define(modifierSelect.is, modifierSelect);

})();

