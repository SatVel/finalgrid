import Ember from 'ember';
import grid from 'gridtest/types/grid';
import groupedheader from 'gridtest/types/grid';

export default Ember.Component.extend({
    
myGrid:'',
groupColumns:'',
columns:[

    {
      "propertyName":"units",
      "title":"RN"
      //"isHidden":false,
      //"isEditable":true,
      //"isDraggable":false
    },

    {
      "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
//      "isEditable":true,
  //    "isDraggable":false

    },

    {
      "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },
    
    {
      "propertyName":"units",
      "title":"RN"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false
    },

    {
      "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },

    {
      "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },
    {
      "propertyName":"units",
      "title":"RN"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false
    },

    {
     "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },

    {
     "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    }	



    ],    
    headers:[
        
        [
    {
      "title": "Actual",
      "colspan": 3
    },
    {
      "title": "MTD",
      "colspan": 3
    },
    
    {
      "title": "Forecast MTD",
      "colspan": 3
                
    }
            
  ]
    
    
    
    ]
/*    
init(){
    
    this._super(...arguments);

    var myGrid=grid.create({
        
     columns:[

    {
      "propertyName":"units",
      "title":"RN"
      //"isHidden":false,
      //"isEditable":true,
      //"isDraggable":false
    },

    {
      "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
//      "isEditable":true,
  //    "isDraggable":false

    },

    {
      "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },
    
    {
      "propertyName":"units",
      "title":"RN"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false
    },

    {
      "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },

    {
      "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },
    {
      "propertyName":"units",
      "title":"RN"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false
    },

    {
     "propertyName":"avg",
      "title":"ADR"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    },

    {
     "propertyName":"revenue",
      "title":"Revenue"
    //  "isHidden":false,
    //  "isEditable":true,
    //  "isDraggable":false

    }	



    ]    
    
    
    });
    
    var groupColumns=groupedheader.create({
    headers:[
        
        [
    {
      "title": "Actual",
      "colspan": 3
    },
    {
      "title": "MTD",
      "colspan": 3
    },
    
    {
      "title": "Forecast MTD",
      "colspan": 3
                
    }
            
  ]
    
    
    
    ]
    
    });
    
    if(myGrid){
     this.set("myGrid",myGrid);   
    }
    
    if(groupColumns){
        
        this.set("groupColumns",groupColumns);
    }

}
*/
    
});
