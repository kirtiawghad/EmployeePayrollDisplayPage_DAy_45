let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) =>{
    alert("start");
	empPayrollList = getEmployeePayrollDataFromStorage();
    alert(empPayrollList.length);
    createInnerHtml();
	document.querySelector(".emp-count").textContent = empPayrollList.length;
	//localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    alert("inside storage");
	return localStorage.getItem('EmployeePayrollList') ?
	JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () => {
    alert("createinnerhtml");
    alert(empPayrollList.length);
	//const headerHtml = "<th></th>Name</th><th>Gender</th><th>Department</th><th>salary</th><th>start date</th><th>actions</th>";
	const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0){
        return;
    } 
        
	let innerHtml = `${headerHtml}`;
	for(const empPayrollData of empPayrollList)
	{
        //alert("name=",empPayrollData._name);
        console.log(empPayrollData._name);
        innerHtml = `${innerHtml}
        <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""/></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${empPayrollData._department}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img src="C:\Users\vinit\OneDrive\Documents\BridgeLabz Assingment Files\HTML\Form Example\assets\icons\delete-black-18dp.svg" id="${empPayrollData._id}" onclick="remove(this)"  alt="" style="height:20px">
            <img src="C:\Users\vinit\OneDrive\Documents\BridgeLabz Assingment Files\HTML\Form Example\assets\icons\create-black-18dp.svg" id="${empPayrollData._id}" onclick="update(this)"  alt="" style="height:20px">
        </td>
        </tr>
        `;
	}
	document.querySelector('#table-display').innerHTML = innerHtml;
}



//remove code
const remove = (node) => {
    alert("remove called");
	let empPayrollData = empPayrollList.find(empData => empData.id == node.id);
	if(!empPayrollData) return;
	const index = empPayrollList
			.map(empData => empData._id)
			.indexOf(empPayrollData._id);
	empPayrollList.splice(index,1);
	localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
	document.querySelector(".emp-count").textContent = empPayrollList.length;
	createInnerHtml();
}