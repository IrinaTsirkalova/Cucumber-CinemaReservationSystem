$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reservationFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Правене на резервация за филм",
  "description": "",
  "id": "правене-на-резервация-за-филм",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Правене на резервация за филм не по-късно от 60 минути преди прожекцията и за свободно място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-не-по-късно-от-60-минути-преди-прожекцията-и-за-свободно-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Избира местата \"14\", \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Вижда съобщение \"Успешно направихте резервация\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 181865200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 98600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 290400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 934000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 119600,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 79526600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно направихте резервация",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 2504900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Правене на резервация за филм не по-късно от 60 минути преди прожекцията и за заето място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-не-по-късно-от-60-минути-преди-прожекцията-и-за-заето-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Избира местата \"11\", \"12\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Вижда съобщение \"Избраните места са заети\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 505600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 81500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 400300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 97200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "12",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 166200,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 327300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Избраните места са заети",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Правене на резервация за филм по-късно от 60 минути преди прожекцията и за свобосно място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-по-късно-от-60-минути-преди-прожекцията-и-за-свобосно-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 18:00\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Избира местата \"14\", \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Вижда съобщение \"Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:00",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 470900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 384900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 97200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 293000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Правене на резервация за филм по-късно от 60 минути преди прожекцията и за заето място в залата",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-по-късно-от-60-минути-преди-прожекцията-и-за-заето-място-в-залата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 18:00\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Избира местата \"11\", \"12\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Вижда съобщение \"Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:00",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 362100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 276900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "12",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 320000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Не можете да направите резервация по-късно от 60 минути преди филма. Избраните места са заети",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Правене на резервация за филм без избрани места",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-избрани-места",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Избира местата \"\", \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете място в залата\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 412900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 51700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 246000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 66800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 188900,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете място в залата",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 107800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Правене на резервация за филм без да е избран броя на билетите",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избран-броя-на-билетите",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Избира датата и часа на прожекцията \"06-02-2021 18:30\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Избира броя на билетите \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Избира местата \"14\", \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете броя на билетите\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 18:30",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 111600,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете броя на билетите",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 83300,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Правене на резервация за филм без да е избрана дата и час на прожекция",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избрана-дата-и-час-на-прожекция",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Избира името на филма \"Железният човек\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Избира датата и часа на прожекцията \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Избира местата \"14\", \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете датата и час на прожекция\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 655200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Железният човек",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 76200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 67300,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете датата и час на прожекция",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Правене на резервация за филм без да е избрано името на филма",
  "description": "",
  "id": "правене-на-резервация-за-филм;правене-на-резервация-за-филм-без-да-е-избрано-името-на-филма",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Потребителя отваря екрана за резервация на филм на \"06-02-2021 17:28\"",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Избира името на филма \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Избира датата и часа на прожекцията \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Избира броя на билетите \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Избира местата \"14\", \"15\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Натиска върху бутона за резервация.",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Вижда съобщение \"Неуспешна резервация. Моля изберете филм\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06-02-2021 17:28",
      "offset": 52
    }
  ],
  "location": "MovieReservationSteps.openReservationScreen(String)"
});
formatter.result({
  "duration": 328200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "MovieReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MovieReservationSteps.chooseTimeAndDate(String)"
});
formatter.result({
  "duration": 40800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "MovieReservationSteps.chooseNumberOfTickets(int)"
});
formatter.result({
  "duration": 103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 16
    },
    {
      "val": "15",
      "offset": 22
    }
  ],
  "location": "MovieReservationSteps.chooseSeat(String,String)"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "location": "MovieReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неуспешна резервация. Моля изберете филм",
      "offset": 17
    }
  ],
  "location": "MovieReservationSteps.receiveMessage(String)"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
});