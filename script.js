document.getElementById("healthForm").addEventListener("submit",function(e){

e.preventDefault()

let pid=document.getElementById("pid").value
let name=document.getElementById("name").value
let dob=document.getElementById("dob").value
let gender=document.getElementById("gender").value
let ward=document.getElementById("ward").value
let symptoms=document.getElementById("symptoms").value.toLowerCase()
let bp=document.getElementById("bp").value
let pulse=document.getElementById("pulse").value || "N/A"
let spo2=document.getElementById("spo2").value || "N/A"
let allergies=document.getElementById("allergies").value || "None"
let medications=document.getElementById("medications").value || "None"
let notes=document.getElementById("notes").value || "No notes provided"

let reports=document.getElementById("reports")

/* Calculate age */

let birth=new Date(dob)
let today=new Date()
let age=today.getFullYear()-birth.getFullYear()

/* Risk detection */

let status="SAFE"
let className="safe"
let title="Routine check-up, no risk indicators"

let systolic=parseInt(bp.split("/")[0])

if(symptoms.includes("chest pain") || systolic>160){

status="CRITICAL"
className="critical"
title="High-risk intake detected"

}

else if(symptoms.includes("fever") || symptoms.includes("cough")){

status="MODERATE"
className="moderate"
title="Moderate symptoms detected"

}

/* Create card */

let card=document.createElement("div")
card.className="intake-card"

card.innerHTML=`

<div class="intake-header">

<span class="badge ${className}">${status}</span>

<span class="pid">${pid}</span>

<span>${title}</span>

</div>

<div class="intake-body">

<p><b>PATIENT ID:</b> ${pid}</p>
<p><b>Name:</b> ${name}</p>
<p><b>Age:</b> ${age} | <b>Gender:</b> ${gender}</p>
<p><b>Ward:</b> ${ward}</p>
<p><b>Symptoms:</b> ${symptoms}</p>
<p><b>Vitals:</b> BP ${bp}, Pulse ${pulse}, SpO2 ${spo2}</p>
<p><b>Known Allergies:</b> ${allergies}</p>
<p><b>Current Medications:</b> ${medications}</p>
<p><b>Doctor Notes:</b> ${notes}</p>

</div>

`

reports.prepend(card)

document.getElementById("healthForm").reset()

})