/* global SplitText */
(function () {
	'use strict';

	var jsonData;
	class enemySelect extends Polymer.Element
	{
	    static get is()
	    {
			return 'enemy-select';
		}

        static get properties()
        {
			return {
				enemies: {
                    type: Array,
                    value: []
				},
				enemyData: {
					type: Array,
					notify: true
				}
			};
		}
	    ready()
	    {
			super.ready();

			var jsonFile = 'jsons/enemies.json';
            $.ajax({
                url: jsonFile,
                async: false,
                dataType: 'json',
                success: function (data) {
					jsonData = data;
					
                }
            });
			this.enemies = jsonData;
            
		}
		_assign() {
			var assignedEnemy = jsonData.find(enemy => {
				if (enemy.name == this.selectedEnemy)
					return true;
				return false;
			});
			this.$.enemyValue.innerHTML = assignedEnemy.name;
			this.$.hpValue.innerHTML = assignedEnemy.hp;
			this.enemyData = {"name": assignedEnemy.name, "health": assignedEnemy.hp };		
		}

	   
	}

	customElements.define(enemySelect.is, enemySelect);

})();

