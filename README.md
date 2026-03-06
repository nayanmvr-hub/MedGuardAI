# MedGuard AI — Patient Safety Intelligence

## AI Innovation Hackathon 2026

College of Engineering, Osmania University, Hyderabad

---

## Project Overview

MedGuard AI is an AI-powered clinical intake screening system designed to identify medical risks from unstructured patient intake records before harm occurs.

Hospitals receive hundreds of patient forms daily that contain inconsistent text, abbreviations, and missing information. MedGuard AI automatically analyzes these records using a Large Language Model (LLM), extracts structured medical data, applies triage rules, and flags high-risk cases.

The system helps medical staff quickly detect dangerous symptoms, drug allergies, and abnormal vitals.

---

## Problem Statement

Manual review of patient intake forms can lead to critical information being overlooked.

Example:
A patient's **penicillin allergy** hidden in notes may be missed and a conflicting drug prescribed.

MedGuard AI prevents this by:

• Automatically extracting medical information
• Identifying high-risk symptoms
• Detecting missing or incomplete data
• Alerting staff to critical patients

---

## Key Features

### 1. AI Intake Screening

The system accepts unstructured patient intake text and processes it using a Large Language Model.

Extracted fields include:

* Patient ID
* Name
* Age
* Symptoms
* Allergies
* Medications
* Blood Pressure
* Pulse
* SpO2
* Doctor Notes

---

### 2. Automated Risk Classification

Patients are classified into three triage categories:

**CRITICAL**

* Chest pain
* Shortness of breath
* SpO2 below 96
* Systolic BP above 160
* Drug allergy conflicts

**MODERATE**

* Missing name
* Missing age
* Missing vitals
* Incomplete intake records

**SAFE**

* No high-risk symptoms
* Normal vitals
* Complete information

---

### 3. Firebase Firestore Database

Every screened patient record is stored in a Firestore collection.

Each document contains:

* Extracted medical fields
* Risk classification
* Original intake text
* Timestamp

This creates a persistent triage ledger for hospital review.

---

### 4. Live Dashboard

A real-time dashboard displays all patient records stored in the database.

Color coding:

* 🔴 Red — CRITICAL
* 🟠 Amber — MODERATE
* 🟢 Green — SAFE

The dashboard automatically updates when new records are added.

---

## Technology Stack

Frontend

* HTML
* CSS
* JavaScript

Artificial Intelligence

* Large Language Model (LLM)

Database

* Firebase Firestore

Deployment

* Vercel / Netlify / Firebase Hosting

---

## System Architecture

User → Web App → LLM → Triage Logic → Firebase Firestore → Live Dashboard

1. User pastes patient intake text
2. Text is sent to the LLM
3. LLM extracts structured medical fields
4. Risk classification rules are applied
5. Record is stored in Firestore
6. Dashboard updates in real time

---

## Test Dataset

The system was designed to correctly classify the following intake cases.

### PT-001 — CRITICAL

Chest pain + BP 180/110 + drug allergy present

Expected Result
status = CRITICAL

---

### PT-002 — SAFE

Normal vitals and mild symptoms

Expected Result
status = SAFE

---

### PT-003 — MODERATE

Missing patient details and vitals

Expected Result
status = MODERATE

---

## Deployment

The application is deployed as a web application accessible via a public URL.

To run locally:

1. Download the project files
2. Open `index.html` in a web browser

---

## AI Agent Log

AI tools were used during development to assist with UI design, debugging JavaScript logic, and integrating Firebase Firestore.

---

## Future Improvements

Possible enhancements include:

* Batch screening of multiple intake records
* Automated hospital alert system for CRITICAL patients
* Risk analytics dashboard
* Patient search and filtering
* Secure backend API for production deployment

---

## Authors

Team Project — AI Innovation Hackathon 2026
College of Engineering, Osmania University
