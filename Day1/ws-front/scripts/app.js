/**
 * Created by Teodor.Tincu on 6/27/2017.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone:'0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone:'0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone:'0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone:'0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone:'0123456789',
        salary: 4500
    }
];
var ok = 0;
function showList() {

    if (ok == 1) {
        var myTable = '<table class="table table-hover"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary  <button onclick="convertFunction()">Convert</button></th><th>Euro Salary</th><th></th><th></th></tr>';

        for (var i in employeesList) {
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td> <td>' + employeesList[i].euroSalary + '</td><td><button onclick="vizualizare(\'' + i + '\')">Vizualizare</button> </td><td><button onclick="stergere(\'' + i + '\')">Stergere</button> </td></tr>';
        }
    } else {
        var myTable = '<table class="table table-hover"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary  <button onclick="convertFunction()">Convert</button></th><th></th><th></th></tr>';

        for (var i in employeesList) {
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td><button onclick="vizualizare(\'' + i + '\')">Vizualizare</button> </td><td><button onclick="stergere(\'' + i + '\')">Stergere</button> </td></tr>';
        }
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    maxFrequency();
}

var Employee =function(firstName, lastName, phone, salary, euroSalary)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.phone=phone;
    this.salary=salary;
    this.euroSalary = euroSalary;
}

function addEmployee()
{
    var firstName= document.getElementById("firstName").value;
    var lastName= document.getElementById("lastName").value;
    var phone= document.getElementById("phone").value;
    var salary= document.getElementById("salary").value;
    var euroSalary = 0;
    employeesList.push(new Employee(firstName, lastName, phone, parseInt(salary), parseInt(euroSalary)));
    showList();
}

function totalSum() {
    var sum = 0;
    for(var i in employeesList) {
        sum += employeesList[i].salary;
    }
    var container = document.getElementById('my_sum');
    container.innerHTML = sum;
}

function deleteLast() {
    employeesList.pop();
    showList();
}

function convertFunction() {
    for(var i in employeesList) {
        employeesList[i].euroSalary = parseInt(employeesList[i].salary) / 4.5 + " Euro";
        ok = 1;
        showList();
    }
}

function vizualizare(j) {
    if (j === undefined) {
        j = 0;
    }
    alert(employeesList[j].firstName + "\n" + employeesList[j].lastName + "\n" + employeesList[j].phone + "\n" +  employeesList[j].salary);
}

function stergere(j) {
    if (j === undefined) {
        j = 0;
    }
    //employeesList.splice(j,1);
    delete employeesList[j];
    showList();
}

function maxFrequency(){
    var max = 0;
    var result;
    var freq = {};
    var freq2 = {};
    for (var i in employeesList) {
        freq[i] = 0;
        freq2[i] = 0;
    }
    for (var i in employeesList) {
        for ( var j in employeesList){
            if (employeesList[i].firstName == employeesList[j].firstName) {
                freq[i] ++;
            }
            if (employeesList[i].lastName == employeesList[j].lastName) {
                freq2[i] ++;
            }
        }

    }
    for (var i in freq){
        if (freq[i] > max) {
            max = freq[i];
            result = i;
        }
    }
    var count = 0;
    for (var i in freq2) {
        if (freq2[i] == 1) {
            count++;
        }
    }
    var counter = {};
    for (var i= 0; i < 10; i++){
        counter[i] = 0;
    }
    for (var i in employeesList) {
        for (var j = 0; j < employeesList[i].phone.length; j++){
            if (employeesList[i].phone[j] == "0"){
                counter[0] ++;
            }
            if (employeesList[i].phone[j] == "1"){
                counter[1] ++;
            }
            if (employeesList[i].phone[j] == "2"){
                counter[2] ++;
            }
            if (employeesList[i].phone[j] == "3"){
                counter[3] ++;
            }
            if (employeesList[i].phone[j] == "4"){
                counter[4] ++;
            }
            if (employeesList[i].phone[j] == "5"){
                counter[5] ++;
            }
            if (employeesList[i].phone[j] == "6"){
                counter[6] ++;
            }
            if (employeesList[i].phone[j] == "7"){
                counter[7] ++;
            }
            if (employeesList[i].phone[j] == "8"){
                counter[8] ++;
            }
            if (employeesList[i].phone[j] == "9"){
                counter[9] ++;
            }
        }
    }

   // var phoneCounter = 0;
    //var res = 0;
   // for(var i in counter){
      //  if (phoneCounter < counter[i]){
        //    phoneCounter = counter[i];
        //    res = i;
      //  }
  //  }
    var cifre = {};
    for (var i = 0; i < 10; i++) {
        cifre[i] = i;
    }

        for (var i in counter) {
            for (var j = 0; j < 10 - i; j++) {
                if (counter[j-1] < counter[j]) {
                    var aux = counter[j];
                    counter[j] = counter[j - 1]
                    counter[j - 1] = aux;
                    var aux2 = cifre[j];
                    cifre[j] = cifre[j - 1];
                    cifre[j - 1] = aux2;
                }
            }
        }

    var average = 0;
    for(var i in employeesList) {
        average += parseInt(employeesList[i].salary);
    }
    average = average/employeesList.length;



    result = employeesList[result].firstName;
    var container = document.getElementById('frequency');
    container.innerHTML = result + ' ' + count + ' ' + cifre[0] + ',' + cifre[1] + ',' + cifre[2] + ',' + cifre[3] + ',' + cifre[4] + ' Average Salary: ' + average;
    //showList();
}

function mySort(){
    var type= document.getElementById("sortType").value;
    if (type == 1) {
        function compare(a,b) {
            if (a.firstName < b.firstName)
                return -1;
            if (a.firstName > b.firstName)
                return 1;
            return 0;
        }
    }
    if (type == 2) {
        function compare(a,b) {
            if (a.lastName < b.lastName)
                return -1;
            if (a.lastName > b.lastName)
                return 1;
            return 0;
        }
    }
    if (type == 3) {
        function compare(a,b) {
            if (a.phone < b.phone)
                return -1;
            if (a.phone > b.phone)
                return 1;
            return 0;
        }
    }
    if (type == 4) {
        function compare(a,b) {
            if (a.salary < b.salary)
                return -1;
            if (a.salary > b.salary)
                return 1;
            return 0;
        }
    }
    employeesList.sort(compare);
    showList();
}

function filterInput() {
    var type= document.getElementById("word").value;
    //var newList = employeesList.slice();
    for (var i in employeesList) {
        if ((employeesList[i].firstName != type) && (employeesList[i].lastName != type)
            && (employeesList[i].phone != type) && (employeesList[i].salary != type)) {
            delete employeesList[i];
        }
    }
    showList();

}


