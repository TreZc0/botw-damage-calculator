/* global SplitText */
(function () {
	'use strict';
let atkValue = "";
let durValue = "";
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
				selectedDurMod: {
					type: String,
					observer: "_selectedDUR",
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
			atkValue = "+ " + selected;
		}
		_selectedDUR(selected,previous) {
			durValue = "+ " + selected;
		}

		_assign() {
			this.$.atkValue.innerHTML = atkValue;
			this.$.durValue.innerHTML = durValue;
			this.modifierData = {"atkMod": atkValue, "durMod": durValue };
				
		}

	   
	}

	customElements.define(modifierSelect.is, modifierSelect);

})();

