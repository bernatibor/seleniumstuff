
Feature('Todo item Lifecycle');

Scenario('test todo lifecycle', (I, loginPage) => {

    // use autoLogin feature or walk through login

    I.amOnPage('/login');
    loginPage.validate();

    //loginPage.sendForm("seleniumtestdebrecen@gmail.com", "Seleniumtest1");

    loginPage.signInWithMS();

    I.seeInCurrentUrl("webapp");

    //I.dontSeeElement(' [...] ');  // assert the task is not added yet

    I.say('I add a new task');
    I.fillField(".addTask-input", "testTask1");

    I.wait(30);

    // assert task is added
    // assert task is not-completed
    // mark completed
    // assert completed task has all visual markers
    // delete task
    // assert not visible anymore

});
