const { I } = inject();

module.exports = {
  
  // locators
  taskList: {
    addTask : {name: 'email'},
    password : {name: 'password'}
  },
  addTaskInput: ".addTask-input",

  validate() {
    I.seeInCurrentUrl("webapp");
  }
}
