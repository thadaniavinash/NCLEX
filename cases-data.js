window.NCLEX_CASES = [
  {
    "id": "cardio-case-1",
    "title": "Case Study 1",
    "topic": "Unit 2 (Cardiovascular Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Which of the following findings require follow-up? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "lung assessment",
              "correct": true
            },
            {
              "text": "client orientation",
              "correct": false
            },
            {
              "text": "capillary refill time",
              "correct": false
            },
            {
              "text": "vital signs",
              "correct": true
            },
            {
              "text": "pedal pulses",
              "correct": false
            },
            {
              "text": "heart sounds",
              "correct": true
            }
          ],
          "preamble": "",
          "explanation": "Lung assessment (crackles, distress), vital signs (tachycardia, tachypnea, hypoxia), and heart sounds (risk of S3 due to heart failure secondary to MI and hypertension) all require immediate follow-up. Client orientation is normal and peripheral perfusion (pedal pulses/capillary refill) is not the primary acute concern compared to airway/breathing/cardiovascular status."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "nn",
              "title": "Nurses' Notes",
              "content": "07:30 - Client arrived via ambulance in moderate respiratory distress. Placed on cardiac monitor showing sinus tachycardia. Respiration shallow and labored. Bilateral crackles auscultated in lower lung bases. Pitting edema (1+) noted in bilateral ankles. Daughter reports client ran out of his blood pressure medications 2 weeks ago and has had progressive shortness of breath over the last 3 days."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each client finding, click to specify if the finding is consistent with the disease process of left-sided heart failure or right-sided heart failure.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Jugular venous distention",
                "correctIndex": 1
              },
              {
                "text": "Pink, frothy sputum",
                "correctIndex": 0
              },
              {
                "text": "Dyspnea",
                "correctIndex": 0
              },
              {
                "text": "Dependent edema",
                "correctIndex": 1
              },
              {
                "text": "Ascites",
                "correctIndex": 1
              },
              {
                "text": "Hepatomegaly",
                "correctIndex": 1
              }
            ],
            "columns": [
              "Left-sided Heart Failure",
              "Right-sided Heart Failure"
            ],
            "firstColumnHeader": ""
          },
          "preamble": "",
          "explanation": "Left-sided heart failure causes pulmonary congestion (dyspnea, pink frothy sputum). Right-sided heart failure causes systemic venous congestion (jugular venous distention, dependent edema, ascites, hepatomegaly)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "nn",
              "title": "Nurses' Notes",
              "content": "08:00 - Client's breathing remains labored. Productive cough noted with small amounts of pink-tinged frothy sputum. Distended jugular veins observed when head of bed is elevated to 45 degrees. Abdomen appears slightly distended; client reports a feeling of fullness and bloating. Right upper quadrant tenderness noted on palpation, suspect hepatomegaly. Edema in lower extremities now assessed as 2+ pitting dependent edema."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following sentence by choosing from the list of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The nurse should first place the client on [[drop0]] position, followed by [[drop1]], as ordered.",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "",
                    "correct": true
                  },
                  {
                    "text": "",
                    "correct": false
                  }
                ],
                "placeholder": "Choose..."
              },
              {
                "options": [
                  {
                    "text": "initiating non-rebreather mask oxygen therapy",
                    "correct": true
                  },
                  {
                    "text": "administering a rapid IV fluid bolus",
                    "correct": false
                  },
                  {
                    "text": "performing chest physiotherapy",
                    "correct": false
                  },
                  {
                    "text": "preparing for immediate endotracheal intubation",
                    "correct": false
                  }
                ],
                "placeholder": "Choose..."
              }
            ]
          },
          "preamble": "",
          "explanation": "Placing the client in high-Fowler's position reduces venous return (preload) and allows maximum lung expansion. Elevating oxygen delivery via a non-rebreather mask is the immediate next step to address severe hypoxia (SpO2 89%) before invasive measures like intubation."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "nn",
              "title": "Nurses' Notes",
              "content": "08:15 - Provider has examined the client and is writing admission and stabilization orders. Client is currently sitting on the edge of the stretcher gasping for breath. SpO2 is 89% on 6L face mask. Heart rate is 108 bpm. Blood pressure is 172/98 mmHg."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each potential diagnostic test, indicate whether the test is anticipated or not anticipated for the care of the client.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Liver function test",
                "correctIndex": 0
              },
              {
                "text": "Chest x-ray",
                "correctIndex": 0
              },
              {
                "text": "Echocardiogram",
                "correctIndex": 0
              },
              {
                "text": "Complete blood count",
                "correctIndex": 0
              },
              {
                "text": "Electroencephalogram",
                "correctIndex": 1
              },
              {
                "text": "Electrocardiogram",
                "correctIndex": 0
              },
              {
                "text": "Ventriculostomy",
                "correctIndex": 1
              },
              {
                "text": "Pulmonary function test",
                "correctIndex": 1
              }
            ],
            "columns": [
              "Anticipated",
              "Not Anticipated"
            ],
            "firstColumnHeader": "Findings"
          },
          "preamble": "",
          "explanation": "Anticipated tests include Liver Function Tests (to evaluate hepatic congestion from right heart failure), Chest X-ray (pulmonary congestion/cardiomegaly), Echocardiogram (EF and structural dysfunction), CBC (general assessment), and ECG (ischemia/infarction/rhythm). Non-anticipated tests include EEG (for seizures/brain activity), Ventriculostomy (intracranial pressure monitoring), and Pulmonary Function Tests (not for acute cardiac dyspnea management)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "nn",
              "title": "Nurses' Notes",
              "content": "08:30 - IV furosemide 40mg was administered stat. Foley catheter inserted with 150mL of concentrated amber urine returned immediately. Orders for diagnostic tests have been received."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "After multiple diagnostic tests, it was confirmed that the client has left-sided heart failure that has progressed to the right side. Which of the following orders should the nurse question when caring for this client? Select one:",
          "type": "multiple_choice",
          "options": [
            {
              "text": "epinephrine",
              "correct": true
            },
            {
              "text": "ramipril",
              "correct": false
            },
            {
              "text": "nitroglycerin",
              "correct": false
            },
            {
              "text": "metoprolol",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Epinephrine is a potent beta-1 and alpha-1 agonist that increases heart rate, cardiac workload, and myocardial oxygen demand, which can exacerbate heart failure and induce myocardial ischemia. Ramipril (ACE inhibitor) and Nitroglycerin (vasodilator) are standard treatments to reduce afterload and preload, and Metoprolol (beta-blocker) is part of long-term therapy once stabilized."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "labs",
              "title": "Lab Results",
              "content": "BNP: 1,250 pg/mL (Elevated)\nTroponin I: 0.02 ng/mL (Normal)\nBUN: 28 mg/dL (Elevated)\nCreatinine: 1.4 mg/dL (Slightly Elevated)\nChest X-Ray: Cardiomegaly with diffuse bilateral alveolar infiltrates consistent with pulmonary edema."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "Upon discharge, the nurse is educating the client on appropriate lifestyle modifications. Select the 3 statements by the nurse that are not appropriate to educate the client.",
          "type": "select_n",
          "limit": 3,
          "options": [
            {
              "text": "monitor for signs of fluid retention",
              "correct": false
            },
            {
              "text": "contact the physician if you gain more than 0.5 lbs overnight",
              "correct": true
            },
            {
              "text": "limit smoking to 1 cigarette a day",
              "correct": true
            },
            {
              "text": "increase fluid intake per day",
              "correct": true
            },
            {
              "text": "consume a low sodium diet",
              "correct": false
            },
            {
              "text": "medications must be taken as prescribed",
              "correct": false
            },
            {
              "text": "monitor weight regularly",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "1. Gaining 0.5 lbs overnight is normal fluctuation; patients are taught to report 2-3 lbs in 24 hours or 5 lbs in a week. 2. Patients must stop smoking entirely, not limit to 1 cigarette. 3. Heart failure patients require fluid restriction, not increased fluids."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "History and Physical",
              "content": "The client was brought to the ED early morning today, accompanied by his daughter. 6L oxygen via face mask was applied and peripheral IV was inserted enroute to the hospital. The client's chief complaint is shortness of breath. The client finds it difficult to complete sentences due to respiratory distress. He has a history of poorly controlled primary hypertension for 15 years due to medication non-adherence. Client also has history of myocardial infarction (MI) 5 years ago. Current medications include lisinopril. He is a smoker for over 40 years; used to smoke 5-10 cigarettes a day, but cut down to 2-3 cigarettes since his MI."
            },
            {
              "id": "nn",
              "title": "Nurses' Notes",
              "content": "12:00 - Client's symptoms have significantly improved following administration of IV loop diuretics. Breathing is comfortable at 18 breaths/min on 2L nasal cannula, SpO2 96%. Plan is to transition to oral medications and discharge home with close outpatient follow-up. Discharging nurse is preparing lifestyle modification education."
            }
          ],
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED)."
        }
      }
    ],
    "disorder": "Unit 2 (Cardiovascular Disorders)",
    "description": "",
    "availability": "all",
    "course": "NURS 1021",
    "unit": "Unit 2 (Cardiovascular Disorders)"
  },
  {
    "id": "case_1780489713691",
    "title": "Case Study 2",
    "topic": "Unit 11 (Endocrine Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Select the 6 client findings that require <b>immediate</b> follow-up.",
          "type": "select_n",
          "limit": 6,
          "options": [
            {
              "text": "Sore throat and nasal congestion for the past week",
              "correct": false
            },
            {
              "text": "Pregnancy status unknown",
              "correct": true
            },
            {
              "text": "Appears drowsy and is oriented to person and time only",
              "correct": true
            },
            {
              "text": "Abdomen is soft without guarding, rigidity, or rebound tenderness",
              "correct": false
            },
            {
              "text": "P 128",
              "correct": true
            },
            {
              "text": "RR 30",
              "correct": true
            },
            {
              "text": "BP 88/60 mmHg",
              "correct": true
            },
            {
              "text": "Finger-stick blood glucose level is 33.3 mmol/L",
              "correct": true
            }
          ],
          "preamble": "",
          "explanation": "This client with a long-standing history of symptomatic hyperglycemia (i.e., polydipsia, polyuria) now has findings of upper respiratory infection, hypovolemia, and a potential acute abdominal condition. Initial assessment of a client involves identifying indicators of life-threatening conditions. For this client, the following findings are the priority for follow-up: Decreased level of consciousness (e.g., drowsiness, disorientation) places the client at increased risk for injury and aspiration and may indicate impaired brain perfusion. This may be due to hypotension or hyperglycemia-induced cerebral edema. Tachycardia occurs to compensate for hypotension or can be the cause of hypotension and requires prompt attention to prevent cardiovascular collapse. Tachypnea is concerning, particularly when associated with rapid, deep respirations, because it may indicate a compensatory response to an underlying metabolic\nacidosis (e.g., ketoacidosis, hypotension-induced lactic acidosis). Hypotension causes impaired organ perfusion that could be life threatening without immediate intervention. Severe hyperglycemia may indicate diabetic ketoacidosis\n(DKA), a life-threatening complication of diabetes mellitus. In addition, hyperglycemia has a diuretic effect leading to\nfluid loss that worsens cardiovascular compromise. Delayed menstruation (e.g., time since last menstruation\nexceeds typical cycle length) could indicate that the client is pregnant, which presents a risk for pregnancy-related\ncomplications (ruptured ectopic pregnancy) and affects care provided to the client (e.g., avoid x-rays and teratogenic\nmedications). (Incorrect) Sore throat and nasal congestion are common findings associated with upper respiratory infections. These common infections could be a precipitating factor for DKA. These findings would not be a priority over those related to more life-threatening conditions because, other than the symptomatic care, there is no curative treatment for common upper respiratory infections. (Incorrect) Abdominal pain is an abnormal finding that requires\nfollow-up after the client is hemodynamically stable. Abdominal rigidity and rebound tenderness are absent in this client, which is reassuring that severe abdominal conditions related to peritoneal irritation are not likely at this time.\nEducational objective: The nurse should immediately follow up on findings of decreased level of consciousness, tachycardia, tachypnea, hypotension, and severe hyperglycemia due to their association with life-threatening conditions, as well as prioritize assessments that rule out other life-threatening complications (e.g., pregnancy status).\n\n",
          "highlightText": "0845: The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced {sore throat and nasal congestion for the past week}. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. {Pregnancy status is unknown|correct}. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client {appears drowsy and is oriented to person and time only|correct}. {The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal}. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), {P 128|correct}, {RR 30|correct}, and {BP 88/60 mm Hg}. {Finger-stick blood glucose level is 33.3 mmol/L|correct}.",
          "maxCorrectSelections": null
        },
        "leftContent": {
          "tabs": [
            {
              "id": "tab_1780489740867",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ],
          "intro": "The nurse is caring for a 20-year-old female client."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each client finding below, click to specify if the finding is consistent with the disease process of diabetic ketoacidosis, ruptured appendix, or ruptured ectopic pregnancy. Each finding may support more than one disease process.",
          "type": "matrix_mr",
          "matrix": {
            "rows": [
              {
                "text": "Polyruria",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Vomiting",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1,
                  2
                ]
              },
              {
                "text": "Tachypnea",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1,
                  2
                ]
              },
              {
                "text": "Tachycardia",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1,
                  2
                ]
              },
              {
                "text": "Hyperglycemia",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Abdominal pain",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1,
                  2
                ]
              }
            ],
            "columns": [
              "Diabetic Ketoacidosis",
              "Ruptured Appendix",
              "Ruptured Ectopic Pregnancy"
            ],
            "firstColumnHeader": "Finding"
          },
          "options": [
            {
              "text": "Option A",
              "correct": true
            },
            {
              "text": "Option B",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Diabetic ketoacidosis (DKA) is a complication of diabetes mellitus that results from lack of insulin. Insulin is required to transport glucose into cells for energy, which means that lack of insulin leads to intracellular starvation despite the high level of glucose circulating in the blood (hyperglycemia). Physiologic responses to hyperglycemia include osmotic diuresis (polyuria) for reduction of blood glucose levels and breakdown of fat into acidic ketone bodies for energy. This leads to states of dehydration (as evidenced by tachycardia), electrolyte imbalance, and metabolic acidosis. Ketoacidosis leads to tachypnea and deep respirations (Kussmaul respirations), as well as abdominal pain and vomiting. Appendicitis is an inflammation of the appendix often resulting from obstruction by fecal matter. Appendiceal obstruction traps colonic fluid and mucus, causing increased intraluminal pressure and inflammation. This impairs perfusion of the appendix, resulting in swelling and ischemia. Clinical manifestations include fever, abdominal pain, rebound abdominal tenderness, tachycardia, nausea, and vomiting. Abdominal pain usually\nbegins near the umbilicus and migrates to the right lower quadrant (e.g., McBurney point). Tachypnea, as well as a\ncompensatory response, can be present, especially if there is a ruptured appendix or evidence of sepsis causing lactic acidosis (metabolic acidosis). Ectopic pregnancy occurs when a fertilized egg implants and grows outside the uterus, often in a fallopian tube. If untreated, ectopic pregnancy can lead to rupture of the fallopian tube (i.e.,\ntubal rupture), resulting in life-threatening hemorrhage. Clinical manifestations include signs of hemorrhagic shock (e.g., hypotension, tachycardia, tachypnea), abdominal pain, referred shoulder pain related to intraabdominal bleeding, and other pregnancy-related symptoms (e.g., nausea, vomiting). Educational objective: Diabetic ketoacidosis, ruptured appendix, and ruptured ectopic pregnancy share some common findings, including abdominal\npain, tachycardia, tachypnea, and vomiting. Diabetic ketoacidosis can be differentiated from these by the presence of\nsevere hyperglycemia and polyuria.\n"
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ],
          "intro": "The nurse is caring for a 20-year-old female client."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following sentence by choosing from the lists of options.",
          "type": "dyad",
          "cloze": {
            "text": "Based on the clinical findings, the client is most at risk of [[drop0]] as evidenced by the client's [[drop1]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "Peritonitis and sepsis",
                    "correct": false
                  },
                  {
                    "text": "Fluid volume deficit and hypovolemic shock",
                    "correct": true
                  },
                  {
                    "text": "Intraabdominal hemorrhage and hypovolemic shock",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "Vital signs",
                    "correct": true
                  },
                  {
                    "text": "Abdominal pain",
                    "correct": false
                  },
                  {
                    "text": "Date of last menstrual period",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "Option A",
              "correct": true
            },
            {
              "text": "Option B",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The client's findings are most aligned with diabetic ketoacidosis (DKA). When there is a lack of insulin to transport glucose into cells, glucose accumulates, creating an osmotic gradient that leads to diuresis (polyuria) and fluid loss. If the hyperglycemia persists, the process continues, and the fluid volume deficit decreases cardiac output and perfusion to vital organs (hypotension). The heart rate increases (tachycardia) to compensate for the decrease in cardiac output. Without immediate treatment, compensatory mechanisms eventually fail, and the client is at risk for developing life-threatening hypovolemic shock. (Incorrect) Based on the date of last menstrual period, the client\ncould be pregnant and experiencing a ruptured ectopic pregnancy. Ectopic pregnancy and rupture are associated with abdominal pain that varies in location and intensity; however, the client is not experiencing other findings related to ectopic pregnancy (e.g., abdominal rigidity, vaginal bleeding). Without treatment, ruptured ectopic pregnancy can lead to intrabdominal hemorrhage and hypovolemic shock. (Incorrect) Peritonitis and sepsis are associated with abdominal pain. However, appendiceal rupture typically also involves abdominal rigidity and guarding due to peritonitis, the inflammatory response that occurs when appendiceal contents (i.e., fecal matter) enter the peritoneal space. Educational objective: Diabetic ketoacidosis is associated with fluid volume deficit, which can lead to hypovolemic shock when untreated. Findings of hypovolemia and impending hypovolemic shock include\nhypotension and tachycardia that occur as the body compensates for decreased cardiac output."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ],
          "intro": "The nurse is caring for a client in the clinic..."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each potential intervention, click to specify whether the intervention is expected or unexpected for the client at this time.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Continuous insulin IV infusion",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Continuous cardiac monitoring",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Sodium polystyrene sulfonate rectally",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Frequent monitoring of electrolyte levels",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Hourly finger-stick blood glucose level checks",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "5% dextrose in 0.9% sodium chloride IV infusion",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Expected",
              "Unexpected"
            ],
            "firstColumnHeader": "Findings"
          },
          "options": [
            {
              "text": "Option A",
              "correct": true
            },
            {
              "text": "Option B",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Management of diabetic ketoacidosis (DKA) initially focuses on IV fluid resuscitation to reverse hypovolemia and then correction of hyperglycemia, electrolyte abnormalities, and acid-base imbalance. Expected prescriptions include:\nContinuous insulin IV infusion to correct hyperglycemia. IV insulin has a more rapid onset of action than\nsubcutaneous insulin, which allows faster and more precise management of the blood glucose level. Continuous cardiac monitoring to detect dysrhythmias related to metabolic acidosis or electrolyte abnormalities. Frequent monitoring of electrolyte levels and replacement of electrolytes as needed to help prevent dysrhythmias.\nIsotonic IV fluid (e.g., 0.9% sodium chloride) to replace fluid losses. Hourly finger-stick blood glucose level checks to\nmonitor for treatment effectiveness and detect any hypoglycemia related to the insulin infusion. Strict intake and output monitoring to evaluate the effectiveness of fluid resuscitation and to monitor for signs of acute kidney injury.\nA prescription of 5% dextrose in 0.9% sodium chloride, a hypertonic solution, would be unexpected because it would\nworsen fluid loss through osmotic diuresis and further increase blood glucose level. This solution is typically administered when ketones are still present in the body but glucose is lower due to insulin administration. In this situation, continuous insulin infusion is needed to clear the ketones (acidosis) from the body, so a dextrose-containing solution is added to prevent hypoglycemia. Sodium polystyrene sulfonate, a potassium-binding resin,\nwould be unexpected for a client with DKA because it may contribute to hypokalemia. Even though serum potassium is elevated in this client at this time, the total body potassium is usually lower due to increased urinary losses. Hypokalemia may develop after insulin administration due to the shift of potassium from the extracellular to intracellular space. Educational objective: Management of diabetic ketoacidosis (DKA) focuses on IV fluid\nresuscitation and correction of hyperglycemia, electrolytes abnormalities, and acid-base imbalance. In addition to\nadministration of isotonic IV fluid, interventions include cardiac monitoring, insulin IV infusion, and frequent monitoring of blood glucose level, electrolytes, and intake/output.\n"
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses's Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            },
            {
              "id": "tab_1780504534699",
              "title": "Laboratory Results",
              "content": "<div><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Glucose, serum (random)<br>&lt;11.1 mmol/L</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>31.8 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Potassium</b><br>3.5 - 5.0 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>5.7 mmol/L</td></tr></tbody></table></div>"
            }
          ],
          "intro": "The nurse is caring for a client in the clinic..."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Click to highlight the prescription that the nurse should perform first.",
          "type": "highlight",
          "options": [
            {
              "text": "Option A",
              "correct": true
            },
            {
              "text": "Option B",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The priority intervention for diabetic ketoacidosis management is fluid resuscitation with isotonic IV fluid, typically with a largevolume 0.9% sodium chloride IV bolus. Fluid resuscitation prevents hypovolemic shock and helps normalize glucose and electrolyte levels via hemodilution. (Incorrect) It is essential to frequently monitor blood glucose\nlevels to assess treatment effectiveness and check for hypoglycemia. However, a blood glucose level had recently been obtained for this client. (Incorrect) Continuous infusion of isotonic IV fluid (e.g., 0.9% sodium chloride 125 mL/hr) is appropriate, but the IV fluid bolus should be infused first because rapid infusion of a large volume of isotonic IV fluid more quickly corrects hypovolemia. (Incorrect) The nurse should prioritize administration of regular insulin IV continuous infusion to correct hyperglycemia, but the first priority is prevention of life-threatening hypovolemic shock\nwith fluid resuscitation. (Incorrect) Maintaining NPO status may be appropriate for a client with a decreased level of consciousness to help prevent aspiration secondary to vomiting while the blood glucose level is being stabilized. However, this can be implemented after fluid resuscitation is initiated. (Incorrect) After blood glucose is decreased to an acceptable range, continuous infusion of isotonic IV fluid is replaced with a continuous infusion of glucose-containing IV solution (5% dextrose in 0.45% sodium chloride) to prevent hypoglycemia and cerebral edema related to a rapidly decreased serum osmolality. If hypoglycemia occurs, 50% dextrose solution IV can be administered PRN to rapidly increase the blood glucose level. Educational objective: The priority intervention for DKA is fluid resuscitation to prevent life-threatening hypovolemic shock and help normalize serum glucose and electrolyte levels.",
          "highlightText": "0905:\n - {Monitor blood glucose level every hour}\n - {Initiate 0.9% sodium chloride 125 mL/hr IV}\n - {Administer regular insulin IV continuous infusion}\n - {Maintain NPO status except for oral medications}\n - {Administer 0.9% sodium chloride 1000 mL IV bolus|correct}\n - {Initiate 50% dextrose solution IV PRN for hypoglycemia}",
          "maxCorrectSelections": null
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses's Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            },
            {
              "id": "tab_1780506014949",
              "title": "Laboratory Results",
              "content": "Laboratory Test and Reference Range          0900\n\nGlucose, serum (random)\n<11.1 mmol/L                                                     31.8 mmol/L\n\nPotassium\n3.5 - 5.0 mmol/L                                              5.7 mmol/L"
            },
            {
              "id": "tab_1780506108808",
              "title": "Prescriptions",
              "content": "0905:\n\n- Monitor blood glucose level every hour\n- Initiate 0.9% sodium chloride 125 mL/hr IV\n- Administer regular insulin IV continuous infusion\n- Maintain NPO status except for oral medications\n- Administer 0.9% sodium chloride 1000 mL IV bolus\n- Initiate 50% dextrose solution IV PRN for hypoglycemia"
            }
          ],
          "intro": "The nurse is caring for a client in the clinic..."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The client is preparing for discharge after receiving successful treatment of diabetic ketoacidosis and a new diagnosis of type 1 diabetes mellitus. The nurse provides teaching about managing diabetes mellitus during an acute illness. Which of the following statements by the client indicate that the teaching has been effective? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "I need to check my urine for ketones if my blood glucose levels are persistently.",
              "correct": true
            },
            {
              "text": "I should drink extra fluids to stay hydrated when I am experiencing an illness.",
              "correct": true
            },
            {
              "text": "I should not take insulin if I cannot eat due to nausea.",
              "correct": false
            },
            {
              "text": "I will check my blood glucose levels more frequently if I am experiencing an illness.",
              "correct": true
            },
            {
              "text": "I will reduce my carbohydrate intake if I experience high blood glucose levels during an illness.",
              "correct": true
            }
          ],
          "preamble": "",
          "explanation": "When a client with diabetes mellitus experiences an infection or another illness, the release of stress hormones can cause increased insulin resistance, which increases the blood glucose level and leads the body to break down fat for energy. Ketones are produced when fat is broken down, which can lead to diabetic ketoacidosis (DKA). Interventions for managing diabetes mellitus and preventing DKA during an illness include: Monitoring the urine for ketones if blood glucose levels are persistently elevated (&gt;13.3 mmol/L) to detect impending DKA (Option 1). Increasing fluid intake to help clear ketones from the system and prevent dehydration during illness. (Option 2) Checking blood glucose levels more frequently (e.g., every 4 hr) to monitor for hyperglycemia. (Option 4) Consuming beverages that contain glucose and replacing electrolytes if nausea and vomiting are present Notifying the health care provider of persistently elevated blood glucose levels, ketones in the urine, high fever, nausea, vomiting, or diarrhea. (Options 3 and 5) Clients with type 1 diabetes mellitus should not discontinue insulin use or reduce food intake during an illness. Unlike clients with type 2 diabetes mellitus, clients with type 1 diabetes produce no insulin, so not taking insulin will precipitate DKA. The client may require more insulin than usual due to the effects of stress hormones, and reduced food intake\ncontributes to the stress response. Educational objective: Infection or another illness in a client with diabetes mellitus can lead to diabetic ketoacidosis (DKA). During an illness, clients with diabetes mellitus should frequently monitor for elevated blood glucose levels and ketones in urine, increase fluid intake, ensure adequate intake of carbohydrates and electrolytes, and contact the health care provider if signs of DKA occur.\n"
        },
        "leftContent": {
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses's Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            },
            {
              "id": "tab_1780505967277",
              "title": "Laboratory Results",
              "content": "Laboratory Test and Reference Range          0900\n\nGlucose, serum (random)\n<11.1 mmol/L                                                     31.8 mmol/L\n\nPotassium\n3.5 - 5.0 mmol/L                                              5.7 mmol/L"
            },
            {
              "id": "tab_1780506040394",
              "title": "Prescriptions",
              "content": "0905:\n\n- Monitor blood glucose level every hour\n- Initiate 0.9% sodium chloride 125 mL/hr IV\n- Administer regular insulin IV continuous infusion\n- Maintain NPO status except for oral medications\n- Administer 0.9% sodium chloride 1000 mL IV bolus\n- Initiate 50% dextrose solution IV PRN for hypoglycemia"
            }
          ],
          "intro": "The nurse is caring for a client in the clinic..."
        }
      }
    ],
    "disorder": "Unit 11 (Endocrine Disorders)",
    "description": "Endocrine Disorders",
    "availability": "all",
    "course": "NURS 1017",
    "unit": "Unit 11 (Endocrine Disorders)"
  },
  {
    "id": "case_1780591712513",
    "title": "University of Maryland - CS1",
    "topic": "Unit 3 (Respiratory Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Which findings require <b>immediate</b> follow-up. <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Shortness of breath",
              "correct": true
            },
            {
              "text": "Chest tightness",
              "correct": true
            },
            {
              "text": "Respiratory rate",
              "correct": true
            },
            {
              "text": "Dry cough",
              "correct": true
            },
            {
              "text": "Audible and expiratory wheezing",
              "correct": true
            },
            {
              "text": "Tripod position",
              "correct": true
            },
            {
              "text": "Speaks only a few words between breaths",
              "correct": true
            },
            {
              "text": "Blood pressure",
              "correct": false
            },
            {
              "text": "Tenderness of chest wall",
              "correct": false
            }
          ],
          "preamble": "The nurse assesses the client on admission.",
          "explanation": "The nurse should recognize pertinent objective data (tachypnea, cough, wheezing, tripod position, and speaking in short phrases) and subjective data (shortness of breath and tightness in the chest) indicate respiratory distress associated with bronchoconstriction of the airways. The clients blood pressure and tenderness of chest wall do not require immediate follow-up.",
          "bowtieParams": [
            {
              "text": "urine output",
              "correct": false
            },
            {
              "text": "temperature",
              "correct": false
            },
            {
              "text": "neurologic status",
              "correct": true
            },
            {
              "text": "serum glucose level",
              "correct": true
            },
            {
              "text": "electrocardiogram (ECG) rhythm",
              "correct": false
            }
          ],
          "bowtieActions": [
            {
              "text": "Administer oxygen at 2 L/min via nasal cannula.",
              "correct": true
            },
            {
              "text": "Request a prescription for an oral corticosteroid.",
              "correct": false
            },
            {
              "text": "Insert a peripheral venous access device (VAD).",
              "correct": false
            },
            {
              "text": "Obtain a urine specimen for urinalysis and culture and sensitivity (C & S).",
              "correct": false
            },
            {
              "text": "Request an order for 50% dextrose in water to be administered intravenously",
              "correct": true
            }
          ],
          "bowtieCol1Header": "Actions to Take",
          "bowtieCol2Header": "Potential Conditions",
          "bowtieCol3Header": "Parameters to Monitor",
          "bowtieConditions": [
            {
              "text": "Bell’s palsy",
              "correct": false
            },
            {
              "text": "hypoglycemia",
              "correct": false
            },
            {
              "text": "ischemic stroke",
              "correct": true
            },
            {
              "text": "urinary tract infection (UTI)",
              "correct": false
            }
          ],
          "bowtieLeftPlaceholder": "Action to Take",
          "bowtieRightPlaceholder": "Parameter to Monitor",
          "bowtieCenterPlaceholder": "Condition Most Likely Experiencing"
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            }
          ],
          "intro": "<p class=\"MsoNormal\"><a name=\"_Hlk106875135\"><span lang=\"EN-US\">The nurse cares for\na 23-year-old male in the Emergency Department who is experiencing acute onset\nof shortness of breath</span></a><span lang=\"EN-US\">.<o:p></o:p></span></p>"
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each potential finding, click to specify if the finding is a risk factor or not a risk factor for asthma.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Family history",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Allergies",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Beta-blockers drug use",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Edema",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Viral infections",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Smoking",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Overweight",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Type II diabetes mellitus",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Risk Factor",
              "Not a Risk Factor"
            ],
            "firstColumnHeader": "Potential Findings"
          },
          "options": [
            {
              "text": "Option A",
              "correct": true
            },
            {
              "text": "Option B",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The nurse should identify risk factors for asthma. Risk factors for asthma include family history, allergies, use of medications such as NSAIDS, betablockers and aspirin. With asthma non-cardio selective beta-blockers block the effects of beta 2 (lung) receptors. This blocks the ability of airways to expand for easier breathing. Smoking cigarettes, exposure to second-hand smoke, viral infections, a history of GERD, and being overweight are also risk factors. Edema and history of diabetes are not risk factors for asthma."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            }
          ],
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following sentences by choosing from the lists of options.",
          "type": "dyad",
          "cloze": {
            "text": "The nurse should recognize that the client is most likely experiencing [[drop0]] as most evidenced by the [[drop1]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "pneumonia",
                    "correct": false
                  },
                  {
                    "text": "pulmonary edema",
                    "correct": false
                  },
                  {
                    "text": "acute asthma onset",
                    "correct": true
                  },
                  {
                    "text": "pneumothorax",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "sleep apnea",
                    "correct": true
                  },
                  {
                    "text": "Vital signs",
                    "correct": false
                  },
                  {
                    "text": "Shortness of breath",
                    "correct": false
                  },
                  {
                    "text": "Expiratory wheezing",
                    "correct": false
                  },
                  {
                    "text": "Orthopnea",
                    "correct": false
                  },
                  {
                    "text": "Fatigue",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The nurse has reviewed the laboratory and chest X-ray reports.&nbsp;",
          "explanation": "The presenting assessment most suggests acute onset asthma evidenced by expiratory wheezing. Wheezing is a high-pitched whistling sound produced during breathing. It is a sign of bronchoconstriction, a narrowing of the airways of the lungs (bronchi) that impedes the flow of air to and from the lungs. Wheezing is often the first sign of asthma or an impending asthma attack.&nbsp;"
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            },
            {
              "id": "tab_1780603343821",
              "title": "Laboratory Results",
              "content": "<br><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Range and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1300</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hematocrit<br>38 - 50%</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">48%</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hemoglobin<br>Female: 115 - 155 g/L<br>Male: 125 - 155 g/L °C</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">150 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>8 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>4.0 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>138 mmol/L</td></tr></tbody></table><p><br></p><br>"
            },
            {
              "id": "tab_1780609656306",
              "title": "Diagnostic Reports",
              "content": "Chest-X Ray results show hyperinflation of lungs with flattened bases at the diaphragm."
            }
          ],
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "Which of the following interventions should the nurse anticipate including in the plan of care? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Administer 2L of oxygen for pulse oximetry < 93% as needed",
              "correct": true
            },
            {
              "text": "Administer albuterol nebulizer treatment every 4 hours as needed",
              "correct": true
            },
            {
              "text": "Place the client in supine position",
              "correct": false
            },
            {
              "text": "Administer low-dose aspirin mg by mouth once a day",
              "correct": false
            },
            {
              "text": "Administer Ibuprofen by mouth every 6 hours as needed for pain",
              "correct": false
            },
            {
              "text": "Raise the head of the bed",
              "correct": true
            },
            {
              "text": "Administer solumedrol mg IV Stat once",
              "correct": true
            },
            {
              "text": "Offer oral fluids by mouth",
              "correct": false
            }
          ],
          "preamble": "The client is diagnosed with onset acute asthma.",
          "explanation": "Maintaining airway patency and preventing the occurrence of reversible complications are priorities in acute asthma care. The emergent plan of care involves giving short-acting Beta 2 agonist (Albuterol), cholinergic antagonist (Ipratropium), oxygen, and corticosteroids to reduce inflammation in the lungs. The nurse should raise the head of the bed to decrease the work of breathing and monitor the pulse oximeter readings. Beta-blockers, like labetalol, are not indicated because they block the effects of beta 2 (lung) receptors and the ability of airways to expand for easier breathing. NSAIDS and aspirin can induce bronchospasms. Tachypnea seen in asthma, increases insensible water loss from the lungs that can lead to dehydration. Increase work of breathing will decrease fluid intake by mouth. Oral fluids can be encouraged once breathing is no longer labored."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            },
            {
              "id": "tab_1780603343821",
              "title": "Laboratory Results",
              "content": "<br><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Range and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1300</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hematocrit<br>38 - 50%</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">48%</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hemoglobin<br>Female: 115 - 155 g/L<br>Male: 125 - 155 g/L °C</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">150 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>8 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>4.0 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>138 mmol/L</td></tr></tbody></table><p><br></p><br>"
            },
            {
              "id": "tab_1780609656306",
              "title": "Diagnostic Reports",
              "content": "Chest-X Ray results show hyperinflation of lungs with flattened bases at the diaphragm."
            }
          ],
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "For each action, click to specify if the nurse should implement the action immediately, within the next hour, or before the end of the shift.",
          "type": "matrix_mr",
          "matrix": {
            "rows": [
              {
                "text": "Instruct client on peak flowmeter use",
                "correctIndex": 0,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Administer 2L of oxygen by nasal cannula",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Administer solumedrol",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Administer albuterol and Ipratropium nebulizer treatment",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Instruct on pursed lip breathing exercises",
                "correctIndex": 0,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Instruct client on home meds",
                "correctIndex": 0,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Apply continuous pulse oximeter",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Immediately",
              "Within the hour",
              "Before the end of the shift"
            ],
            "firstColumnHeader": "Nursing Interventions"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The nurse reviews the physician’s orders and considers needed teaching.",
          "explanation": "When asthma is suspected, the emergent plan of care is giving short-acting Beta 2 agonist (Albuterol), cholinergic antagonist (Ipratropium), oxygen, and corticosteroids to reduce inflammation in the lungs. It is best to teach pursed lip breathing exercises when the patient is sitting upright and feeling relaxed. Pursed lip breathing is a simple technique for slowing down a person’s breathing and getting more air into their lungs. Ineffective inhaler use can lead to asthma exacerbation. Peak flow meters measure peak expiratory flow rate (PEFR), a small device used to monitor lung function. Clients should be instructed to perform three peak flow meter readings regularly at least 2 to 4 times daily, when asthma symptoms are decreased or not present. Once the client is stabilized the nurse can instruct the client how to use albuterol rescue inhalers appropriately."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            },
            {
              "id": "tab_1780603343821",
              "title": "Laboratory Results",
              "content": "<br><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Range and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1300</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hematocrit<br>38 - 50%</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">48%</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hemoglobin<br>Female: 115 - 155 g/L<br>Male: 125 - 155 g/L °C</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">150 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>8 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>4.0 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>138 mmol/L</td></tr></tbody></table><p><br></p><br>"
            },
            {
              "id": "tab_1780609656306",
              "title": "Diagnostic Reports",
              "content": "Chest-X Ray results show hyperinflation of lungs with flattened bases at the diaphragm."
            }
          ],
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "Complete the following sentence by choosing from the list of options.&nbsp;",
          "type": "dyad",
          "cloze": {
            "text": "The nurse determines the client's status is[[drop0]]. The nurse should now[[drop1]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "improving",
                    "correct": true
                  },
                  {
                    "text": "deteriorating",
                    "correct": false
                  },
                  {
                    "text": "unchanged",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "prepare the client for discharge home",
                    "correct": true
                  },
                  {
                    "text": "resume the breathing treatment",
                    "correct": false
                  },
                  {
                    "text": "continue to monitor the client's breathing",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "matrix": {
            "rows": [],
            "columns": [
              "",
              "",
              ""
            ],
            "firstColumnHeader": ""
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The nurse reassesses the client at 1330 after implementing the health care providers prescriptions.",
          "explanation": "The client’s shortness of breath has resolved, and the oxygen level has increased. Since the symptoms improved with corticosteroids, short-acting beta 2 agonist (Albuterol), Ipratropium and oxygen treatment, the nurse should now prepare the client for discharge to home."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115:</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></p>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            },
            {
              "id": "tab_1780603343821",
              "title": "Laboratory Results",
              "content": "<br><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Range and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1300</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hematocrit<br>38 - 50%</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">48%</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hemoglobin<br>Female: 115 - 155 g/L<br>Male: 125 - 155 g/L °C</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">150 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>8 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>4.0 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>138 mmol/L</td></tr></tbody></table><p><br></p><br>"
            },
            {
              "id": "tab_1780609656306",
              "title": "Diagnostic Reports",
              "content": "Chest-X Ray results show hyperinflation of lungs with flattened bases at the diaphragm."
            }
          ],
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath."
        }
      }
    ],
    "disorder": "Unit 3 (Respiratory Disorders)",
    "description": "Maryland Next Gen NCLEX Test Bank Project September 1, 2022; Authors: Angela Davis, RN, MS, CM/DN Morgan State University",
    "availability": "all",
    "course": "NURS 1021",
    "unit": "Unit 3 (Respiratory Disorders)"
  },
  {
    "id": "case_1781534070850",
    "title": "NURS 1017 Unit 1 Case Study 1",
    "topic": "Unit 1 (Introduction to Pathophysiology)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Which of the following finding by the nurse are classified as signs?",
          "type": "select_all",
          "options": [
            {
              "text": "Nausea",
              "correct": false
            },
            {
              "text": "Vomiting",
              "correct": true
            },
            {
              "text": "Loose stools (diarrhea)",
              "correct": true
            },
            {
              "text": "Abdominal cramping",
              "correct": false
            },
            {
              "text": "Temperature of 37.8 °C",
              "correct": true
            }
          ],
          "preamble": "Which of the following finding by the nurse are classified as signs?",
          "explanation": "Signs are clinical manifestations that can be objectively measured by the nurse. Symptoms are clinical manifestations that can only be described by the client (and cannot be objectively measured by the nurse)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The 8–20 hours between the shared dinner and the beginning of symptoms is the [[drop0]]. The twelve new cases identified since Monday represent [[drop1]]. The thirteen students who are currently ill represent [[drop2]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "incubation period",
                    "correct": true
                  },
                  {
                    "text": "remission",
                    "correct": false
                  },
                  {
                    "text": "convalescence",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "incidence",
                    "correct": true
                  },
                  {
                    "text": "prevalence",
                    "correct": false
                  },
                  {
                    "text": "morbidity",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "prevalence",
                    "correct": true
                  },
                  {
                    "text": "incidence",
                    "correct": false
                  },
                  {
                    "text": "mortality",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "On Tuesday morning, the campus clinic nurse reviews the clinic log and contacts the residence. The following information becomes available (see Epidemiologic Data tab). The cause of the illness has not been confirmed.",
          "explanation": "The incubation period is the time from exposure to symptom onset. Incidence refers to new cases during a specified period. Prevalence refers to all current cases at a point in time or during a defined period."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO2)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1781543362694",
              "title": "Epidemiologic Data",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">&nbsp;</span><span class=\"nurse-note-text\"><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic Data</th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>New Cases</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Twelve additional students developed similar symptoms between Monday and Tuesday morning.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Current Cases</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Thirteen students, including Leila, are currently symptomatic.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Expected Pattern</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">The campus clinic usually records zero to one visit for similar symptoms in a typical week.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Person, place, and time</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">All affected students live in the same residence; nine of the twelve new cases attended the catered dinner. Symptoms began 8–20 hours after the event.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Diagnostic status</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No specific cause has been confirmed; testing and further investigation are pending.</td></tr></tbody></table> <br>        </span></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Which hypothesis should the nurse prioritize based on the available information?",
          "type": "multiple_choice",
          "options": [
            {
              "text": "A possible outbreak associated with a shared exposure should be investigated further.",
              "correct": true
            },
            {
              "text": "The event is a pandemic because more than one person is affected.",
              "correct": false
            },
            {
              "text": "The reports should be treated as unrelated because the exact cause is not yet known.",
              "correct": false
            },
            {
              "text": "A final medical diagnosis can be made from the symptom pattern alone.",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The observed number exceeds the expected number in a defined place and time, and many affected students share an exposure. This supports prioritizing a possible outbreak for investigation. A hypothesis guides action but is not the same as a confirmed diagnosis."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO2)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1781543362694",
              "title": "Epidemiologic Data",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">&nbsp;</span><span class=\"nurse-note-text\"><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic Data</th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>New Cases</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Twelve additional students developed similar symptoms between Monday and Tuesday morning.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Current Cases</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Thirteen students, including Leila, are currently symptomatic.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Expected Pattern</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">The campus clinic usually records zero to one visit for similar symptoms in a typical week.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Person, place, and time</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">All affected students live in the same residence; nine of the twelve new cases attended the catered dinner. Symptoms began 8–20 hours after the event.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Diagnostic status</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No specific cause has been confirmed; testing and further investigation are pending.</td></tr></tbody></table> <br>        </span></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each specified intervention, click to specify whether the intervention is primary, secondary, or tertiary prevention.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Provide follow-up and return precautions to students who are already ill.",
                "correctIndex": 2,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Reinforce hand hygiene and environmental cleaning.",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Identify and assess students with new symptoms.",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Primary Prevention",
              "Secondary Prevention",
              "Tertiary Prevention"
            ],
            "firstColumnHeader": ""
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Primary prevention is the elimination of risk factors for the develop of the disease/condition. Secondary prevention is the early detection/screening of the disease/condition. Tertiary prevention is any nursing/medical intervention once the disease/condition develops."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO2)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1781543362694",
              "title": "Epidemiologic Data",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">&nbsp;</span><span class=\"nurse-note-text\"><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic Data</th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>New Cases</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Twelve additional students developed similar symptoms between Monday and Tuesday morning.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Current Cases</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Thirteen students, including Leila, are currently symptomatic.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Expected Pattern</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">The campus clinic usually records zero to one visit for similar symptoms in a typical week.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Person, place, and time</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">All affected students live in the same residence; nine of the twelve new cases attended the catered dinner. Symptoms began 8–20 hours after the event.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Diagnostic status</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No specific cause has been confirmed; testing and further investigation are pending.</td></tr></tbody></table> <br>        </span></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "What interventions should the nurse implement now. <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Use a consistent case log to record the onset of clinical manifestations, residence location, and shared exposures.",
              "correct": true
            },
            {
              "text": "Provide hand-hygiene and environmental-cleaning education to the residence community.",
              "correct": true
            },
            {
              "text": "Advise symptomatic students to avoid preparing food for others and to seek assessment if symptoms persist or worsen.",
              "correct": true
            },
            {
              "text": "Communicate case trends to the designated infection-prevention/public health contact according to organizational policy.",
              "correct": true
            },
            {
              "text": "Announce a final cause of the illness before the investigation is complete.",
              "correct": false
            },
            {
              "text": "Stop surveillance after the student begins to feel better.",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "These interventions implement surveillance, prevention, early assessment, patient education, and communication within agency/public-health policies. The nurse should not claim an unconfirmed cause or stop monitoring after a single client starts to improve."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO2)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1781543362694",
              "title": "Epidemiologic Data",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">&nbsp;</span><span class=\"nurse-note-text\"><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic Data</th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>New Cases</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Twelve additional students developed similar symptoms between Monday and Tuesday morning.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Current Cases</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Thirteen students, including Leila, are currently symptomatic.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Expected Pattern</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">The campus clinic usually records zero to one visit for similar symptoms in a typical week.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Person, place, and time</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">All affected students live in the same residence; nine of the twelve new cases attended the catered dinner. Symptoms began 8–20 hours after the event.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Diagnostic status</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No specific cause has been confirmed; testing and further investigation are pending.</td></tr></tbody></table> <br>        </span></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "Which interpretations of the follow-up data are correct? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "The incidence during the most recent 72-hour period is zero because no new cases occurred.",
              "correct": true
            },
            {
              "text": "Prevalence has decreased because fewer students are currently ill.",
              "correct": true
            },
            {
              "text": "Morbidity has decreased because symptoms and usual function have improved.",
              "correct": true
            },
            {
              "text": "The findings support that the response may be effective, although surveillance and follow-up should continue.",
              "correct": true
            },
            {
              "text": "The absence of new cases proves the exact etiology of the illness.",
              "correct": false
            },
            {
              "text": "Prevalence is zero because no new cases occurred, even though two students remain symptomatic.",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Based on the follow-up data, the incidence is zero since there are no new cases. Since only two students are currently ill, the prevalence has also decreased. Morbidity is the presence of a disease state and since only two students are currently symptomatic, it has decreased. Since the incidence, prevalence, and morbidity have decreased, the interventions most likely have been effective. Etiology is the cause of a disease and has no relationship to the incidence of the disease. Prevalence is not zero because two students currently have the disease."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781534070850",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client is alert and answers questions appropriately. She appears tired. Lips are mildly dry. She can sit and walk without assistance. Client reports no chronic illness, no current medications, no recent travel, and no known allergies. A mild left ankle sprain from 6 months ago is now resolved. Client is worried about a midterm that is scheduled for next week.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1015:</span><span class=\"nurse-note-text\">Clinic records show no clinic visits for similar symptoms during the previous seven days.</span></p>"
            },
            {
              "id": "tab_1781541062110",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Campus Clinic<br>1000</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">37.8 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">102</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">18</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">110/70</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse Oximetry Reading (SpO2)</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">99% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1781543362694",
              "title": "Epidemiologic Data",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">&nbsp;</span><span class=\"nurse-note-text\"><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic Data</th><th placeholder=\"Header 2\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; background: rgb(2, 82, 135); color: white; text-align: left;\">Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>New Cases</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Twelve additional students developed similar symptoms between Monday and Tuesday morning.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Current Cases</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Thirteen students, including Leila, are currently symptomatic.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Expected Pattern</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">The campus clinic usually records zero to one visit for similar symptoms in a typical week.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Person, place, and time</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">All affected students live in the same residence; nine of the twelve new cases attended the catered dinner. Symptoms began 8–20 hours after the event.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Diagnostic status</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No specific cause has been confirmed; testing and further investigation are pending.</td></tr></tbody></table> <br>        </span></p>"
            },
            {
              "id": "tab_1782145488775",
              "title": "Follow-Up Data (After 7 Days)",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Epidemiologic and Other Parameters</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">New cases</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">No new cases have been reported during the previous 72 hours.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Current cases</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Two students remain mildly symptomatic, compared with thirteen at the peak.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Progression of cases</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Most students are tolerating oral fluids, eating normally, and returning to usual activities.</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Complications</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">No student required hospitalization, and no deaths occurred.</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The campus clinic nurse is caring for a 19-year-old female student who visits the campus health centre on Monday morning. She reports that she felt well the previous day and attended a catered dinner in her residence at 18:00 the previous day. At approximately 02:00 this morning, she developed nausea, two episodes of vomiting, three loose stools, mild abdominal cramping, and fatigue. Two roommates who attended the same dinner have texted her that they have similar symptoms. Leila has no chronic health conditions, takes no regular medications, and has not travelled recently."
        }
      }
    ],
    "disorder": "Unit 1 (Introduction to Pathophysiology)",
    "description": "A case study for formative review of NURS 1017 Unit 1",
    "availability": "all",
    "course": "NURS 1017",
    "unit": "Unit 1 (Introduction to Pathophysiology)"
  },
  {
    "id": "case_1781741217820",
    "title": "NCSBN - Case Study 1",
    "topic": "Unit 6 (Gastrointestinal Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Click\tto\thighlight\tthe\tfindings\tbelow\tthat\twould\trequire\tfollow-up.",
          "type": "highlight",
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient.",
          "explanation": "These findings require follow-up because they suggest an acute abdominal process with infection or inflammatory complications. Persistent severe abdominal pain, fever, vomiting/constipation, and anorexia raise concern for appendicitis, obstruction, peritonitis, or occult traumatic injury. The trauma history and abnormal temperature/respiratory rate make the presentation more concerning than the social smoking/alcohol history or BMI.",
          "highlightTabs": [
            {
              "id": "ht_1781743042143",
              "title": "Nurses' Notes",
              "content": "Client reports {nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks|correct} and {abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week|correct}. Client states, “{The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.|correct}” {Client plays soccer\twith\tthe\tchild\tonce\ta\tweek}.\tVital\tsigns: {T\t103.4°\tF\t(39.7°\tC), P\t92,\tRR\t22,\tBP\t130/86|correct}, {pulse\toximetry\treading\t98%\ton\troom\tair}. {No significant\tpast\tmedical\tor\tsurgical\thistory}.\tBody\tmass\tindex\t(BMI)\tof\t32. {Drinks\talcohol\tonly\tduring\tsocial\toccasions,\tusually\t3\tbeverages}. Smokes cigarettes during social occasions."
            }
          ],
          "maxCorrectSelections": null
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": ""
            }
          ],
          "intro": ""
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each assessment finding below, click to specify if the finding is consistent with the disease process of ... . Each finding may support more than 1 disease process.",
          "type": "matrix_mr",
          "matrix": {
            "rows": [
              {
                "text": "appetite",
                "correctIndices": [
                  0,
                  1
                ]
              },
              {
                "text": "pain level",
                "correctIndices": [
                  0,
                  1,
                  2
                ]
              },
              {
                "text": "bowel pattern",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1
                ]
              },
              {
                "text": "gastrointestinal symptoms",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  1
                ]
              }
            ],
            "columns": [
              "Bowel Obstruction",
              "Appendicitis",
              "Ruptured Spleen"
            ],
            "firstColumnHeader": "Assessment Finding"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Loss of appetite is common in appendicitis and can occur with bowel obstruction. Severe abdominal pain is consistent with obstruction or appendicitis and can also occur with splenic injury after trauma. Constipation supports bowel obstruction and can occur with appendicitis; nausea and vomiting are most consistent with obstruction and appendicitis rather than isolated splenic rupture."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": "<p><b>Emergency Department</b></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks and abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week. Client states, “The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.” Client plays soccer with the child once a week. Vital signs: T 39.7 °C, P 92, RR 22, BP 130/86, pulse oximetry reading 98% on room air. No significant past medical or surgical history. Body mass index (BMI) of 32. Drinks alcohol only during social occasions, usually 3 beverages. Smokes cigarettes during social occasions.</span></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Select\tthe\t3\tcomplications\tthe\tclient\tis\tat\trisk\tfor\tdeveloping.",
          "type": "select_n",
          "limit": 3,
          "options": [
            {
              "text": "anemia",
              "correct": false
            },
            {
              "text": "peritonitis",
              "correct": true
            },
            {
              "text": "septic shock",
              "correct": true
            },
            {
              "text": "hypovolemia",
              "correct": true
            },
            {
              "text": "dysrhythmias",
              "correct": false
            },
            {
              "text": "cardiac arrest",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The presentation and later findings are most consistent with complicated appendicitis with rupture. A ruptured appendix can spill infected contents into the peritoneum, causing peritonitis and sepsis/septic shock. Vomiting, fever, third spacing, and possible peritoneal fluid loss increase risk for hypovolemia."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": "<p><b>Emergency Department</b></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks and abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week. Client states, “The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.” Client plays soccer with the child once a week. Vital signs: T 39.7 °C, P 92, RR 22, BP 130/86, pulse oximetry reading 98% on room air. No significant past medical or surgical history. Body mass index (BMI) of 32. Drinks alcohol only during social occasions, usually 3 beverages. Smokes cigarettes during social occasions.</span></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each potential intervention, click to specify whether the intervention is indicated or not indicated for the client.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "clear liquid diet ",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "heating pad to abdomen",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "soadsuds enema",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "abdominal girth measurements",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "abdominal computed tomograph (CT) scan",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Indicated",
              "Not Indicated"
            ],
            "firstColumnHeader": "Potential Intervention"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tNurses’\tNotes\tfrom\t1130.",
          "explanation": "The client should remain NPO while an acute abdomen is evaluated and possible surgery is anticipated. Enemas and heat can worsen or mask an inflammatory abdominal process and increase the risk of perforation. CT imaging is indicated to evaluate appendicitis, obstruction, or traumatic abdominal pathology; abdominal girth measurement is not the priority intervention in this presentation."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": "<p><b>Emergency Department</b></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks and abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week. Client states, “The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.” Client plays soccer with the child once a week. Vital signs: T 39.7 °C, P 92, RR 22, BP 130/86, pulse oximetry reading 98% on room air. No significant past medical or surgical history. Body mass index (BMI) of 32. Drinks alcohol only during social occasions, usually 3 beverages. Smokes cigarettes during social occasions.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1130:</span><span class=\"nurse-note-text\">Notified primary health care provider about client status. Awaiting orders.</span></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The nurse should insert [[drop0]]. It would be a priority for the nurse to request a prescription for an[[drop1]]. The nurse should prepare the client for surgery within[[drop2]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "rectal tube",
                    "correct": false
                  },
                  {
                    "text": "a nasogastric (NG) tube",
                    "correct": true
                  },
                  {
                    "text": "an indwelling urethral catheter",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "analgesic medication",
                    "correct": false
                  },
                  {
                    "text": "antipyretic medication",
                    "correct": false
                  },
                  {
                    "text": "anti-infective medication",
                    "correct": true
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "6 hours",
                    "correct": true
                  },
                  {
                    "text": "8 hours",
                    "correct": false
                  },
                  {
                    "text": "24 hours",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tNurses’\tNotes\tfrom\t1230,\t1245,\t1400,\tand\t1415 and\tthe\tDiagnostic\tResults\tfrom\t1230\tand\t1445.",
          "explanation": "The CT scan shows gangrenous appendicitis progressing to ruptured appendix with free intraperitoneal fluid. An NG tube supports gastric decompression, anti-infective therapy is a priority for perforation/peritonitis risk, and urgent surgery is needed. Waiting 8 or 24 hours would increase the risk for worsening sepsis and peritoneal contamination."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": "<p><b>Emergency Department</b></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks and abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week. Client states, “The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.” Client plays soccer with the child once a week. Vital signs: T 39.7 °C, P 92, RR 22, BP 130/86, pulse oximetry reading 98% on room air. No significant past medical or surgical history. Body mass index (BMI) of 32. Drinks alcohol only during social occasions, usually 3 beverages. Smokes cigarettes during social occasions.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1130:</span><span class=\"nurse-note-text\">Notified primary health care provider about client status. Awaiting orders.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1230:</span><span class=\"nurse-note-text\">Client transported to radiology department for abdominal computed tomography\t(CT)\tscan.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1245:</span><span class=\"nurse-note-text\">20-gauge\tperipheral\tvenous\taccess\tdevice\t(VAD)\tinserted\tinto\tthe\tleft hand.\tVAD\tsite\tpatent\twithout\tsigns\tof\tinfiltration.\t0.9%\tsodium\tchloride (normal\tsaline)\tinfusing\tat\t75\tmL/hr.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Client\treports\tsudden\trelief\tof\tabdominal\tpain.\tVital\tsigns:\tT\t102.5°\tF (39.2°\tC),\tP\t110,\tRR\t20,\tBP\t125/86.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1415:</span><span class=\"nurse-note-text\">Primary\thealth\tcare\tprovider\tnotified\tabout\tclient\tstatus.\tOrder\treceived for an additional abdominal CT scan. Client transported to radiology department.</span></div>"
            },
            {
              "id": "tab_1781749126110",
              "title": "Diagnostic Results",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Acute\tgangrenous\tappendix\twith\tcalcified\tappendicolith.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1130<span style=\"font-weight: normal;\">:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Free\tintraperitoneal\tfluid\tnoted\tconsistent\twith\ta\truptured\tappendix.</span></span><span class=\"nurse-note-text\"><br></span></div><div><br></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "Which\tof\tthe\tfollowing\tfindings\twould\tindicate\tthe\tclient\tis\tprogressing as expected? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "clear, liquid diet",
              "correct": false
            },
            {
              "text": "board-like abdomen",
              "correct": false
            },
            {
              "text": "rebound tenderness",
              "correct": false
            },
            {
              "text": "incentive spirometry use",
              "correct": true
            },
            {
              "text": "diminished bowel sounds",
              "correct": false
            },
            {
              "text": "performance of leg exercises",
              "correct": true
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tNurses’\tNotes\tfrom\t1800,\t2030,\tand\t2230.",
          "explanation": "Coughing, deep breathing, incentive spirometry, and leg exercises are expected postoperative behaviors that reduce atelectasis, pneumonia, and venous thromboembolism. A boardlike abdomen, rebound tenderness, and diminished bowel sounds after ruptured appendectomy suggest peritoneal irritation or ileus and require follow-up. Clear liquids are not the best indicator of expected progress when abdominal assessment findings remain abnormal."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1781741217820",
              "title": "Nurses' Notes",
              "content": "<p><b>Emergency Department</b></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Client reports nausea, loss of appetite, vomiting, fever, and constipation for the past 2 weeks and abdominal pain rated 7/10 on the Numerical Rating Scale for 1 week. Client states, “The abdominal pain started after my 7-year-old child accidentally kicked me in the stomach.” Client plays soccer with the child once a week. Vital signs: T 39.7 °C, P 92, RR 22, BP 130/86, pulse oximetry reading 98% on room air. No significant past medical or surgical history. Body mass index (BMI) of 32. Drinks alcohol only during social occasions, usually 3 beverages. Smokes cigarettes during social occasions.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1130:</span><span class=\"nurse-note-text\">Notified primary health care provider about client status. Awaiting orders.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1230:</span><span class=\"nurse-note-text\">Client transported to radiology department for abdominal computed tomography\t(CT)\tscan.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1245:</span><span class=\"nurse-note-text\">20-gauge\tperipheral\tvenous\taccess\tdevice\t(VAD)\tinserted\tinto\tthe\tleft hand.\tVAD\tsite\tpatent\twithout\tsigns\tof\tinfiltration.\t0.9%\tsodium\tchloride (normal\tsaline)\tinfusing\tat\t75\tmL/hr.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Client\treports\tsudden\trelief\tof\tabdominal\tpain.\tVital\tsigns:\tT\t102.5°\tF (39.2°\tC),\tP\t110,\tRR\t20,\tBP\t125/86.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1415:</span><span class=\"nurse-note-text\">Primary\thealth\tcare\tprovider\tnotified\tabout\tclient\tstatus.\tOrder\treceived for an additional abdominal CT scan. Client transported to radiology department.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1800:</span><span class=\"nurse-note-text\">Client transported to the operating room for an open appendectomy.</span></div><div class=\"\"><b>Medical-Surgical Unit</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">2030:</span><span class=\"nurse-note-text\">Client transported back to the medical-surgical unit.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">2230:</span><span class=\"nurse-note-text\">Client performing coughing and deep-breathing exercises every hour while awake with the incentive spirometer. Performing postoperative leg exercises every hour while awake. Nasogastric\t(NG)\ttube\tremoved. Drinking\tclear\tliquids.\tAbdomen\tboardlike\twith\tdiminished&nbsp; bowel sounds in all quadrants. Rebound tenderness present.</span></div>"
            },
            {
              "id": "tab_1781749126110",
              "title": "Diagnostic Results",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100:</span><span class=\"nurse-note-text\">Acute\tgangrenous\tappendix\twith\tcalcified\tappendicolith.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1130<span style=\"font-weight: normal;\">:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Free\tintraperitoneal\tfluid\tnoted\tconsistent\twith\ta\truptured\tappendix.</span></span><span class=\"nurse-note-text\"><br></span></div><div><br></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t41-year-old\tmale\tclient."
        }
      }
    ],
    "disorder": "Unit 6 (Gastrointestinal Disorders)",
    "description": "",
    "availability": "all",
    "course": "NURS 1021",
    "unit": "Unit 6 (Gastrointestinal Disorders)"
  },
  {
    "id": "case_1782149061171",
    "title": "NCSBN Case Study 2",
    "topic": "Unit 4 (Inflammation and Immune Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Which\tof\tthe\tfollowing\tassessment\tfindings\trequire\t<b>immediate</b> follow-up? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "lung sounds",
              "correct": true
            },
            {
              "text": "shoulder pain",
              "correct": true
            },
            {
              "text": "laboratory results",
              "correct": true
            },
            {
              "text": "productive cough",
              "correct": false
            },
            {
              "text": "abdominal assessment findings",
              "correct": true
            },
            {
              "text": "pulse, respirations, and blood pressure",
              "correct": true
            },
            {
              "text": "temperature and pulse oximetry reading",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Left-sided diminished breath sounds after rib/LUQ trauma may indicate hemothorax. Left shoulder pain after splenic trauma suggests referred pain from diaphragmatic irritation, and abdominal guarding/dullness suggest internal bleeding. Low hemoglobin/hematocrit with tachycardia and hypotension indicates possible hemorrhage; normal temperature and oxygen saturation are not the priority, and productive cough alone is less specific."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "Which of the following issues is the client at risk of developing? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "stroke",
              "correct": false
            },
            {
              "text": "hemothorax",
              "correct": true
            },
            {
              "text": "bowel perforation",
              "correct": false
            },
            {
              "text": "splenic laceration",
              "correct": true
            },
            {
              "text": "pulmonary embolism",
              "correct": false
            },
            {
              "text": "abdominal aortic aneurysm",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Left lower rib/LUQ trauma, left shoulder pain, bruising, abdominal tenderness/dullness, hypotension, anemia, and decreased left breath sounds point to splenic injury with possible bleeding into the abdomen and chest. Stroke, bowel perforation, pulmonary embolism, and abdominal aortic aneurysm are not best supported by the mechanism and findings."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The nurse should <strong>first</strong> address the client’s[[drop0]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "abdominal pain",
                    "correct": false
                  },
                  {
                    "text": "respiratory status",
                    "correct": false
                  },
                  {
                    "text": "laboratory results",
                    "correct": true
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The most urgent problem is evidence of internal hemorrhage: hemoglobin 9 g/dL and hematocrit 27% with hypotension and tachycardia. Although respiratory status and pain require monitoring, the abnormal blood counts identify a potentially life-threatening blood loss problem that must be addressed first."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each potential order, click to specify whether the potential order is indicated or not indicated for the client.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "intravenous fluids",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "serum type and screen",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "chest percussion therapy",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "insertion of a nasogastric tube",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "administration of prescribed pain medications",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Indicated",
              "Not Indicated"
            ],
            "firstColumnHeader": "Potential Orders"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The nurse has reviewed the Nurses’ Notes from 1000.",
          "explanation": "Splenic laceration and hemothorax create risk for hypovolemia and transfusion need, so IV fluids and type/screen are indicated. Pain should be treated while continuing assessment. Chest percussion could worsen trauma-related bleeding/respiratory compromise, and an NG tube is not indicated for isolated splenic laceration/hemothorax."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client diagnosed with a splenic laceration and a left-sided hemothorax per the physician.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Which of the following actions should the nurse take? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Mark the surgical site.",
              "correct": false
            },
            {
              "text": "Provide the client with ice chips",
              "correct": false
            },
            {
              "text": "Perform a medication reconciliation.",
              "correct": true
            },
            {
              "text": "Obtain consent for surgery from the client.",
              "correct": false
            },
            {
              "text": "Insert a peripheral venous access device (VAD).",
              "correct": true
            },
            {
              "text": "Inform the client about the risks and benefits with surgery and anesthesia.",
              "correct": false
            },
            {
              "text": "Ask the client's parents to wait in the waiting room while the plan of care is discussed with the client.",
              "correct": false
            },
            {
              "text": "Assess the client's previous experience with surgery and anesthesia.",
              "correct": true
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tNurses’\tNotes\tfrom\t1030.",
          "explanation": "Before urgent surgery, the nurse can complete medication reconciliation, ensure IV access, and assess anesthesia/surgical history. The surgeon/provider explains risks and benefits and marks the operative site according to facility policy; a minor’s consent generally involves the parent/guardian unless emergency exceptions apply. Ice chips are inappropriate because the client should remain NPO."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client diagnosed with a splenic laceration and a left-sided hemothorax per the physician.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1030:</span><span class=\"nurse-note-text\">Client referred for immediate surgery.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "Click\tto\thighlight\tthe\tfindings\tbelow\tthat\tindicate\ta\tworsening\tof the client’s status.",
          "type": "highlight_2",
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tProgress\tNotes\tfrom\t0800.",
          "explanation": "Refusing incentive spirometry after splenectomy/chest trauma increases risk for atelectasis and pneumonia. Maximal PCA use with persistent nausea/vomiting suggests uncontrolled pain, opioid adverse effects, or postoperative ileus and requires follow-up. Ambulation, clear breath sounds, tidaling with inspiration, adequate urine output, and a clean/dry incision are expected findings.",
          "highlightTabs": [
            {
              "id": "ht_1782155894212",
              "title": "Progress Notes",
              "content": "Day 3<div>0800:Client\tis\tpostoperative\tday\t3\tafter\ta\tsplenectomy\tand\tis {able\tto\tambulate\tin\tthe\tcorridor\t3\tor\t4\ttimes\tdaily with minimal assistance}. Client has clear breath sounds a left-sided chest tube in place attached to a closed-chest drainage system. {Tidaling of the water chamber noted on deep inspiration}. {Client refuses to use the incentive&nbsp; spirometer, stating it causes left-sided chest pain|correct}. {Client is\tusing\tprescribed\tpatient-controlled\tanalgesia\t(PCA)\tdevice maximally every hour|correct} and {continues to have intermittent nausea and vomiting|correct}. Adequate urine output. Abdominal surgical incision site with dressing is clean, dry, and intact with no erythema, edema, or drainage.</div>"
            }
          ],
          "maxCorrectSelections": 3
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782149061171",
              "title": "Nurses' Notes",
              "content": "<b>Emergency Department</b><div><b>Day 1</b></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client appears pale and slightly diaphoretic. Large amount of bruising noted\talong\tthe\tleft\ttorso\tand\tover\tthe\tleft\tupper\tquadrant\t(LUQ)\tof the abdomen. Tenderness, guarding, and dullness to percussion noted on abdominal assessment. Slightly diminished breath sounds noted in\tthe\tleft\tlung\tfields\ton\tauscultation;\tclient\thas\ta\tproductive\tcough. Electrocardiogram\t(ECG)\tshows\tnormal\tsinus\trhythm.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client diagnosed with a splenic laceration and a left-sided hemothorax per the physician.</span></div><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1030:</span><span class=\"nurse-note-text\">Client referred for immediate surgery.</span></div>"
            },
            {
              "id": "tab_1782149228557",
              "title": "History and Physical",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Body System</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Findings</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulmonary</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">denies shortness of breath; reports discomfort in&nbsp;the lower left side of chest when taking a deep&nbsp;breath</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Gastrointestinal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">reports feeling abdominal fullness and is&nbsp;occasionally nauseated</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Musculoskeletal</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">sustained an injury to the left rib cage after being&nbsp;struck by a mechanically pitched baseball in a&nbsp;<br>batting cage last week; reports intermittent pain&nbsp;in\tthe\tleft\tshoulder\trated\t6/10\ton\tthe\tNumerical&nbsp;<br>Rating\tScale\tand\tfeels\tlight-headed;\tsignificant&nbsp;bruising to the shoulder; history of an orthoscopic&nbsp;repair to the left shoulder for a torn rotator cuff&nbsp;last year</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">Psychosocial</td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">client has not felt well enough to attend baseball&nbsp;practice since the injury</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149370244",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>T</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.6° C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>P</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>RR</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">24</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>BP</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">90/50</td></tr><tr><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\"><b>Pulse oximetry reading</b></td><td placeholder=\"Cell\" style=\"border: 1px solid rgb(204, 216, 224); padding: 8px; min-width: 80px; background: white; color: rgb(30, 41, 59);\">98% on room air</td></tr></tbody></table><p><br></p>"
            },
            {
              "id": "tab_1782149482143",
              "title": "Laboratory Result",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Department<br>Day 1<br>0900</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">white blood cell (WBC) count<br>Adult/child &gt; 2 years: 5–10\tx\t10<sup>9</sup>/L)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">19 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hemoglobin (Hgb)<br>Male:\t140–180\tg/L<br>Female: 120–160\tg/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">90 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">hematocrit (HCT)<br>Male:\t42%–52% (0.42–0.52)<br>Female:\t37%–47% (0.37–0.47)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">27% (0.27)</td></tr></tbody></table><p><br></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t17-year-old\tmale\tclient."
        }
      }
    ],
    "disorder": "Unit 4 (Inflammation and Immune Disorders)",
    "description": "",
    "availability": "all",
    "course": "NURS 1021",
    "unit": "Unit 4 (Inflammation and Immune Disorders)"
  },
  {
    "id": "case_1782159166328",
    "title": "New Case Study",
    "topic": "Unit 3 (Respiratory Disorders)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "Select the 4 client findings that require <b>immediate</b> follow-up.",
          "type": "select_n",
          "limit": 4,
          "options": [
            {
              "text": "vital signs",
              "correct": true
            },
            {
              "text": "lung sounds",
              "correct": true
            },
            {
              "text": "capillary refill",
              "correct": true
            },
            {
              "text": "client orientation",
              "correct": false
            },
            {
              "text": "radial pulse characteristics",
              "correct": false
            },
            {
              "text": "characteristics of the cough",
              "correct": true
            }
          ],
          "preamble": "<br>",
          "explanation": "Fever, tachypnea, borderline oxygenation on supplemental oxygen, coarse crackles, delayed capillary refill, and green sputum suggest pneumonia with impaired oxygenation and possible sepsis. Current orientation is normal, and the irregular pulse is known in the context of recent atrial fibrillation history, although it still requires monitoring."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each client finding below, click to specify if the finding is consistent with the disease process of pneumonia, a urinary tract infection (UTI), or influenza . Each finding may support more than 1 disease process.",
          "type": "matrix_mr",
          "matrix": {
            "rows": [
              {
                "text": "fever",
                "correctIndices": [
                  0,
                  2,
                  1
                ]
              },
              {
                "text": "confusion",
                "correctIndices": [
                  0,
                  1
                ]
              },
              {
                "text": "body soreness",
                "correctIndex": 0,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "cough and sputum",
                "correctIndex": 0,
                "correctIndices": [
                  0,
                  2
                ]
              },
              {
                "text": "shortness of breath",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Pneumonia",
              "Urinary Tract Infection",
              "Influenza"
            ],
            "firstColumnHeader": "Client Findings"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Fever is common to respiratory, urinary, and viral infections. Confusion in an older adult may occur with UTI or hypoxia/sepsis from pneumonia. Body aches are classic for influenza, while productive cough and shortness of breath most strongly support pneumonia, with cough also possible in influenza."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following sentence by choosing from the list of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The client is at <strong>highest</strong> risk for developing[[drop0]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "stroke",
                    "correct": false
                  },
                  {
                    "text": "hypoxia",
                    "correct": true
                  },
                  {
                    "text": "dysrhythmias",
                    "correct": false
                  },
                  {
                    "text": "a pulmonary embolism",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "The client has worsening respiratory symptoms, coarse crackles, tachypnea, decreased oxygen saturation despite supplemental oxygen, and declining level of consciousness. These findings make hypoxia the most immediate risk, more urgent than stroke, dysrhythmias, or pulmonary embolism based on the available data."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "For each potential nursing intervention, click to specify whether the intervention is indicated or not indicated for the care of the client.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Prepare the client for defibrillation",
                "correctIndex": 1,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Place the client in a semi-Fowler's position.",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Request an order to increase the oxygen flow rate",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Request an order to insert an additional peripheral VAD.",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Request an order to administer an intravenous fluid bolus",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Indicated",
              "Not Indicated"
            ],
            "firstColumnHeader": "Potential Nursing Interventions"
          },
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The nurse has reviewed the Nurses’ Notes from 1200.",
          "explanation": "Semi-Fowler’s positioning and increased oxygen address hypoxia. Hypotension, tachycardia, diaphoresis, and altered arousal suggest sepsis/shock, so additional IV access and a fluid bolus are indicated. Defibrillation is used for life-threatening shockable rhythms, not sinus tachycardia or sepsis without a shockable dysrhythmia."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1200:</span><span class=\"nurse-note-text\">Called to bedside by the adult child who states that the client “isn’t acting right.”\tOn\tassessment,\tclient\tis\tdifficult\tto\tarouse,\tpale,\tand\tdiaphoretic. Vital\tsigns:\tP\t112,\tRR\t32,\tBP\t90/62,\tpulse\toximetry\treading\t91%\ton\t2\tL/min of oxygen via nasal cannula.</span></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Click to highlight the orders that the nurse should consider a priority.",
          "type": "highlight_2",
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "The\tnurse\thas\treviewed\tthe\tOrders\tfrom\t1215.",
          "explanation": "The client is showing possible sepsis with hypoxia and hypotension. Priority care is to obtain cultures/labs, support oxygenation/perfusion with fluids, and administer prescribed broad-spectrum antibiotics promptly. CT and urinary catheterization may be needed but should not delay immediate sepsis and oxygenation interventions.",
          "highlightTabs": [
            {
              "id": "ht_1782160902340",
              "title": "Orders",
              "content": "<b>1215</b>:<div><ul><li>{Insert an indwelling urethral catheter}</li><li>{vancomycin 1 g, IV, every 12 hours|correct}</li><li>{computed tomograph (CT) scan of the chest}</li><li>{0.9% sodium chloride (normal saline) 500 mL, IV, once|correct}</li><li>{laboratory tests: blood culture and sensitivity (C &amp; S), complete blood count (CBC), arterial blood gas (ABG)|correct}</li></ul></div>"
            }
          ],
          "maxCorrectSelections": 3
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1200:</span><span class=\"nurse-note-text\">Called to bedside by the adult child who states that the client “isn’t acting right.”\tOn\tassessment,\tclient\tis\tdifficult\tto\tarouse,\tpale,\tand\tdiaphoretic. Vital\tsigns:\tP\t112,\tRR\t32,\tBP\t90/62,\tpulse\toximetry\treading\t91%\ton\t2\tL/min of oxygen via nasal cannula.</span></p>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "For each assessment finding below, click to specify if the finding is consistent with the disease process of ... . Each finding may support more than 1 disease process.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "pale skin tone",
                "correctIndex": 1,
                "correctIndices": []
              },
              {
                "text": "respirations, 36",
                "correctIndex": 2,
                "correctIndices": []
              },
              {
                "text": "blood pressure, 118/68",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "pulse oximetry reading, 91%",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "client interacting with adult child at bedside",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Improved",
              "Not Changed",
              "Worsened"
            ],
            "firstColumnHeader": "Assessment Finding"
          },
          "options": [
            {
              "text": "",
              "correct": true
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Compared with the 1200 assessment, pallor and oxygen saturation remain unchanged, and respirations have worsened from 32 to 36/min. Blood pressure has improved from 90/62 to 118/68, and interacting with the adult child indicates improved arousal compared with being difficult to arouse."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1782159166328",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1000:</span><span class=\"nurse-note-text\">Client\twas\tbrought\tto\tthe\tED\tby\tthe\tclient’s\tadult\tchild\tdue\tto\tincreased shortness of breath this morning. The adult child reports that the client has been running a fever for the past few days and has started to cough up greenish mucus and to complain of soreness throughout the body. Client was\thospitalized\tfor\tissues\twith\tatrial\tfibrillation\t6\tdays\tago.\tHistory\tof hypertension.\tVital\tsigns:\tT\t101.1°\tF\t(38.4°\tC),\tP\t92,\tRR\t22,\tBP\t152/86, pulse\toximetry\treading\t94%\ton\toxygen\tat\t2\tL/min\tvia\tnasal\tcannula. On\tassessment,\tthe\tclient’s\tbreathing\tappears slightly\tlabored,\tand\tcoarse crackles\t(rales)\tare\tnoted\tin\tthe\tbilateral\tlung\tbases.\tSkin\tslightly\tcool\tto touch\tand\tpale\tpink\tin\ttone;\tpulses\t3+\tand\tirregular.\tCapillary\trefill\tis\t3 seconds. Client is alert and oriented to person, place, and time. The adult child states, “Sometimes it seems like my parent is confused.” Peripheral venous\taccess\tdevice\t(VAD)\tplaced\tin\tright\tforearm.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1200:</span><span class=\"nurse-note-text\">Called to bedside by the adult child who states that the client “isn’t acting right.”\tOn\tassessment,\tclient\tis\tdifficult\tto\tarouse,\tpale,\tand\tdiaphoretic. Vital\tsigns:\tP\t112,\tRR\t32,\tBP\t90/62,\tpulse\toximetry\treading\t91%\ton\t2\tL/min of oxygen via nasal cannula.</span></p>"
            },
            {
              "id": "tab_1782161985059",
              "title": "Orders",
              "content": "<b>1215</b>:<div><ul><li>insert an indwelling urethral catheter</li><li>vancomycin\t1\tg,\tIV,\tevery\t12\thours</li><li>computed\ttomography\t(CT)\tscan\tof\tthe\tchest</li><li>0.9%\tsodium\tchloride\t(normal\tsaline)\t500\tmL,\tIV,\tonce</li><li>laboratory\ttests:\tblood\tculture\tand\tsensitivity\t(C\t&amp;\tS),\tcomplete blood\tcount\t(CBC),\tarterial\tblood\tgas\t(ABG)</li></ul></div>"
            }
          ],
          "intro": "The\tnurse\tin\tthe\temergency\tdepartment\t(ED)\tis\tcaring\tfor\ta\t78-year-old\tfemale\tclient."
        }
      }
    ],
    "disorder": "Unit 3 (Respiratory Disorders)",
    "description": "",
    "availability": "all",
    "course": "NURS 1021",
    "unit": "Unit 3 (Respiratory Disorders)"
  },
  {
    "id": "case_1782350000001",
    "title": "NURS 1017 Unit 1 Case Study 2",
    "topic": "Unit 1 (Introduction to Pathophysiology)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "The nurse is reviewing Marcus's initial clinical assessment. Which of the following findings are classified as <b>signs</b>? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Blood pressure of 154/96 mmHg",
              "correct": true
            },
            {
              "text": "Heart rate of 104 beats/min",
              "correct": true
            },
            {
              "text": "Epigastric tenderness elicited on abdominal palpation",
              "correct": true
            },
            {
              "text": "Severe, band-like tension headache across the forehead",
              "correct": false
            },
            {
              "text": "Burning sensation in the epigastric region",
              "correct": false
            },
            {
              "text": "Profound exhaustion and insomnia",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Signs are objective evidence of a disease that can be directly evaluated, observed, or measured by the client or healthcare professionals (such as blood pressure of 154/96 mmHg, heart rate of 104 beats/min, and epigastric tenderness elicited on physical examination). In contrast, symptoms are subjective evidence of a disease that can only be evaluated, experienced, and described by the client (such as headaches, sensations of epigastric burning pain, and feelings of fatigue or insomnia)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temperature</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Heart Rate (P)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Respiratory Rate (RR)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Blood Pressure (BP)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Oxygen Saturation (SpO<sub style=\"\">2</sub>)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "For each client finding, click to specify whether the finding is a <b>predisposing factor</b> or a <b>precipitating factor</b>.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Family history of essential hypertension and coronary artery disease",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Chronic, relentless 4-month administrative workload and sleep disruption",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Self-administration of ibuprofen 800 mg 3–4 times daily over the last 2 weeks",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Acute escalation to 5–6 espresso shots daily over the past 72 hours",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Middle age (44 years old) and male sex",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              }
            ],
            "columns": [
              "Predisposing Factor",
              "Precipitating Factor"
            ],
            "firstColumnHeader": "Client Finding"
          },
          "options": [],
          "preamble": "The nurse reviews Marcus's clinical background and recent activities alongside newly obtained assessment findings (see Clinical Assessment and Point-of-Care Testing tab).",
          "explanation": "Predisposing factors are factors that increase the risk or vulnerability of developing a disease or condition (e.g., genetic family history, chronic prolonged occupational stress, middle age, and sex). Precipitating factors are specific triggers that directly provoke or cause the onset of an acute disease state or acute clinical manifestation (e.g., sudden high-dose ingestion of ulcerogenic NSAIDs triggering acute epigastric gastritis, and acute caffeine overload triggering tachyarrhythmia and blood pressure elevation)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm, sinus tachycardia</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            },
            {
              "id": "labs_1",
              "title": "Clinical Assessment and Point-of-Care Testing",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Assessment / Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range / Clinical Context</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Random Point-of-Care Capillary Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">8.4 mmol/L (elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 7.8 mmol/L random non-fasting; client last ate 3 hours ago</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Abdomen</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Moderate tenderness localized to the epigastrium on palpation; no guarding, no rebound tenderness, bowel sounds normoactive in all 4 quadrants</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: non-tender abdomen without organomegaly</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Musculoskeletal</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Marked palpatory hypertonicity and tenderness of bilateral upper trapezius, splenius capitis, and suboccipital muscles</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Consistent with muscle contraction / tension headache</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "Complete the following statement regarding Marcus's physiological state by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The cumulative wear and tear on Marcus's body from prolonged overactivation of compensatory mechanisms represents [[drop0]]. The multisystem breakdown—demonstrated by hypertension, tachycardia, gastritis, and stress hyperglycemia—indicates that he has progressed to [[drop1]]. Furthermore, Marcus's acute epigastric gastric irritation resulting from high-dose ibuprofen therapy is classified as having an [[drop2]] etiology.",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "allostatic load",
                    "correct": true
                  },
                  {
                    "text": "homeostasis",
                    "correct": false
                  },
                  {
                    "text": "convalescence",
                    "correct": false
                  },
                  {
                    "text": "remission",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "allostatic overload",
                    "correct": true
                  },
                  {
                    "text": "a pandemic",
                    "correct": false
                  },
                  {
                    "text": "a subclinical stage",
                    "correct": false
                  },
                  {
                    "text": "an incubation period",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "iatrogenic",
                    "correct": true
                  },
                  {
                    "text": "idiopathic",
                    "correct": false
                  },
                  {
                    "text": "endemic",
                    "correct": false
                  },
                  {
                    "text": "congenital",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [],
          "preamble": "",
          "explanation": "Allostasis refers to the physiological processes that support homeostasis when internal or external environmental demands change. Allostatic load is the wear and tear on the body that results from prolonged over- or underactivation of compensatory mechanisms. When compensatory responses are excessive, sustained, or inadequately regulated, allostatic overload occurs, exacting a physical 'cost' to organs and tissues (manifesting as hypertension, tachycardia, gastritis, tension headaches, and hyperglycemia as illustrated on Unit 1, Slide 9). Etiology refers to the cause or origin of a disorder; an iatrogenic condition is one resulting from the activity of healthcare professionals or prescribed/administered medical, nursing, or pharmacological interventions (such as NSAID-induced gastritis). Idiopathic means without known cause."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm, sinus tachycardia</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            },
            {
              "id": "labs_1",
              "title": "Clinical Assessment and Point-of-Care Testing",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Assessment / Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range / Clinical Context</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Random Point-of-Care Capillary Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">8.4 mmol/L (elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 7.8 mmol/L random non-fasting; client last ate 3 hours ago</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Abdomen</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Moderate tenderness localized to the epigastrium on palpation; no guarding, no rebound tenderness, bowel sounds normoactive in all 4 quadrants</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: non-tender abdomen without organomegaly</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Musculoskeletal</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Marked palpatory hypertonicity and tenderness of bilateral upper trapezius, splenius capitis, and suboccipital muscles</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Consistent with muscle contraction / tension headache</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "The nurse is developing a comprehensive health promotion and clinical management plan. For each proposed intervention, click to specify whether it represents <b>primary prevention</b>, <b>secondary prevention</b>, or <b>tertiary prevention</b>.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Facilitating workplace stress-management programs and sleep-hygiene education for campus faculty to reduce risk factors before illness occurs.",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Conducting routine blood pressure and fasting blood glucose screenings for asymptomatic staff at an annual employee wellness fair.",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Discontinuing over-the-counter NSAIDs and administering a prescribed proton pump inhibitor to treat Marcus's active epigastric gastritis.",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Providing occupational therapy ergonomics and physical therapy exercises to manage Marcus's active tension backache and muscle contraction headaches.",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Administering a validated depression and anxiety screening questionnaire during routine health checkups to identify subclinical psychological distress early.",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              }
            ],
            "columns": [
              "Primary Prevention",
              "Secondary Prevention",
              "Tertiary Prevention"
            ],
            "firstColumnHeader": "Intervention"
          },
          "options": [],
          "preamble": "",
          "explanation": "Primary prevention aims to keep disease from occurring by reducing risk factors or exposure in susceptible individuals (e.g., stress-management seminars and sleep education before disease onset). Secondary prevention focuses on the early screening, detection, and diagnosis of disease when it is asymptomatic or subclinical (e.g., routine blood pressure, blood glucose, and psychological screening clinics). Tertiary prevention encompasses all medical, nursing, and pharmacological interventions implemented to treat an established disease or condition (e.g., prescribing proton pump inhibitors for gastritis and physical therapy for active tension headaches)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm, sinus tachycardia</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            },
            {
              "id": "labs_1",
              "title": "Clinical Assessment and Point-of-Care Testing",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Assessment / Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range / Clinical Context</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Random Point-of-Care Capillary Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">8.4 mmol/L (elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 7.8 mmol/L random non-fasting; client last ate 3 hours ago</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Abdomen</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Moderate tenderness localized to the epigastrium on palpation; no guarding, no rebound tenderness, bowel sounds normoactive in all 4 quadrants</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: non-tender abdomen without organomegaly</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Musculoskeletal</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Marked palpatory hypertonicity and tenderness of bilateral upper trapezius, splenius capitis, and suboccipital muscles</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Consistent with muscle contraction / tension headache</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Which nursing interventions should the nurse implement during Marcus's clinic visit? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Educate the client on how chronic allostatic load leads to allostatic overload which in turn produces multisystem wear and tear on the cardiovascular, gastrointestinal, and endocrine systems.",
              "correct": true
            },
            {
              "text": "Instruct the client to immediately discontinue unprescribed high-dose ibuprofen to prevent further iatrogenic gastrointestinal mucosal injury.",
              "correct": true
            },
            {
              "text": "Teach relaxation and diaphragmatic breathing techniques to help down-regulate sympathetic overactivation and support physiological homeostasis.",
              "correct": true
            },
            {
              "text": "Advise the client to abruptly eliminate all oral fluid intake to allow the body's internal set points to reset.",
              "correct": false
            },
            {
              "text": "Reassure the client that because hypertension has a genetic predisposing factor, lifestyle changes are ineffective and unnecessary.",
              "correct": false
            },
            {
              "text": "Collaborate with the primary healthcare provider to evaluate the need for short-term gastric mucosal protection and schedule a follow-up assessment.",
              "correct": true
            }
          ],
          "preamble": "",
          "explanation": "Appropriate interventions include client education regarding allostatic load and the multisystem effects of stress (cardiovascular, GI, endocrine), eliminating iatrogenic risks by stopping high-dose NSAIDs, teaching physiological relaxation strategies to support homeostatic regulation, and arranging appropriate medical follow-up. Fluid restriction is physiologically detrimental and disrupts fluid homeostasis. Genetic predisposing factors increase risk but do not make disease inevitable; modifying lifestyle and precipitating triggers is vital."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm, sinus tachycardia</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            },
            {
              "id": "labs_1",
              "title": "Clinical Assessment and Point-of-Care Testing",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Assessment / Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range / Clinical Context</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Random Point-of-Care Capillary Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">8.4 mmol/L (elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 7.8 mmol/L random non-fasting; client last ate 3 hours ago</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Abdomen</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Moderate tenderness localized to the epigastrium on palpation; no guarding, no rebound tenderness, bowel sounds normoactive in all 4 quadrants</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: non-tender abdomen without organomegaly</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Musculoskeletal</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Marked palpatory hypertonicity and tenderness of bilateral upper trapezius, splenius capitis, and suboccipital muscles</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Consistent with muscle contraction / tension headache</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The nurse reviews Marcus's follow-up assessment obtained 4 weeks later (see Follow-Up Data tab). Which interpretations are correct? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "The return of blood pressure, heart rate, and blood glucose to narrow reference ranges demonstrates the restoration of physiological homeostasis.",
              "correct": true
            },
            {
              "text": "The complete absence of epigastric burning and tension headaches signifies a clinical remission of his acute manifestations.",
              "correct": true
            },
            {
              "text": "Marcus is currently in the stage of convalescence following the acute phase of allostatic overload and gastritis.",
              "correct": true
            },
            {
              "text": "The rapid improvement indicates that Marcus has developed permanent sequelae of his gastrointestinal lining.",
              "correct": false
            },
            {
              "text": "Marcus's overall prognosis is positive regarding the prevention of long-term cardiovascular and gastrointestinal disease.",
              "correct": true
            },
            {
              "text": "Because the client's symptoms have cleared, the mortality rate of the entire school faculty has dropped to zero.",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Homeostasis is the maintenance of a stable internal environment via the dynamic equilibrium of physiological variables within narrow set-point ranges using negative feedback loops (demonstrated by normal BP, HR, and glucose). Remission is the temporary, partial, or complete disappearance of the clinical manifestations of a disease. Convalescence is the stage of recovery following an acute stage of disease or injury. Prognosis is a forecast as to the probable course and outcome of disease (which is favorable here). Sequelae are permanent lesions, disorders, or pathological conditions resulting from a preceding disease, which Marcus did not develop. Mortality refers to the death rate within a population and cannot be inferred from a single client's recovery."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0830:</span><span class=\"nurse-note-text\">Client presents to employee health clinic appearing visibly exhausted with dark circles under eyes and clenched jaw. Client reports working 65–70 hours weekly over the past 4 months due to administrative restructuring, high-stakes student disciplinary hearings, and upcoming provincial accreditation reviews. He describes persistent, band-like tension headaches across the forehead and occiput, progressive midday fatigue, and profound insomnia, waking up nightly around 0300 with racing thoughts. Over the past 2 weeks, to maintain focus and combat sleep loss, he increased caffeine intake from 1 morning coffee to 5–6 espresso shots daily and began self-medicating with over-the-counter ibuprofen 800 mg orally 3 to 4 times daily on an empty stomach. He now reports worsening gnawing, burning epigastric discomfort that intensifies shortly after drinking espresso. Medical history: no personal history of chronic illness; denies tobacco or illicit drug use; social alcohol use (1–2 beers on weekends, none recently). Family history: father diagnosed with essential hypertension at age 48 and suffered an acute myocardial infarction at age 58.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Annual Physical (1 Year Ago)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Employee Health Clinic (Today, 0830)</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.7 °C (oral)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.9 °C (oral)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">72 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">104 bpm, sinus tachycardia</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">118/74 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">154/96 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">99% on room air</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98% on room air</td></tr></tbody></table>"
            },
            {
              "id": "labs_1",
              "title": "Clinical Assessment and Point-of-Care Testing",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Assessment / Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range / Clinical Context</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Random Point-of-Care Capillary Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">8.4 mmol/L (elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 7.8 mmol/L random non-fasting; client last ate 3 hours ago</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Abdomen</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Moderate tenderness localized to the epigastrium on palpation; no guarding, no rebound tenderness, bowel sounds normoactive in all 4 quadrants</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: non-tender abdomen without organomegaly</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Physical Exam: Musculoskeletal</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Marked palpatory hypertonicity and tenderness of bilateral upper trapezius, splenius capitis, and suboccipital muscles</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Consistent with muscle contraction / tension headache</td></tr></tbody></table>"
            },
            {
              "id": "fu_1",
              "title": "Follow-Up Data (4 Weeks Later)",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Evaluation Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding at 4-Week Follow-Up Visit</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Vital Signs</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">T 36.8 °C; HR 72 bpm, regular; RR 14 breaths/min; BP 120/78 mmHg; SpO<sub>2</sub> 99% on room air</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Fasting Blood Glucose</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">5.1 mmol/L (within normal reference set point: 3.9–5.6 mmol/L)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Clinical Manifestations</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Epigastric burning completely resolved; no abdominal tenderness on palpation; tension headaches absent over the past 14 days; client reports sleeping 7 hours nightly and feeling refreshed.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Treatment Adherence</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client completely discontinued high-dose OTC ibuprofen; reduced caffeine to 1 morning cup; completed 4-week course of prescribed oral omeprazole 20 mg daily; attending twice-weekly stress-reduction and mindfulness sessions.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Tissue Integrity & Complications</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">No gastrointestinal bleeding or ulceration occurred; no residual organ damage or permanent tissue lesions.</td></tr></tbody></table>"
            }
          ],
          "intro": "The occupational health nurse is conducting an evaluation of Marcus, a 44-year-old high school vice-principal, who visits the employee health clinic on Tuesday morning reporting escalating physical and psychological distress over recent weeks."
        }
      }
    ],
    "disorder": "Unit 1 (Introduction to Pathophysiology)",
    "description": "A case study for formative review of NURS 1017 Unit 1",
    "availability": "all",
    "course": "NURS 1017",
    "unit": "Unit 1 (Introduction to Pathophysiology)"
  },
  {
    "id": "case_1782350000002",
    "title": "NURS 1017 Unit 1 Case Study 3",
    "topic": "Unit 1 (Introduction to Pathophysiology)",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "The nurse reviews Evelyn's initial clinic presentation. Which of the following findings are classified as <b>symptoms</b>? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Bilateral wrist and hand joint pain rated 8/10",
              "correct": true
            },
            {
              "text": "Morning joint stiffness lasting 2.5 hours",
              "correct": true
            },
            {
              "text": "Feelings of profound fatigue and malaise",
              "correct": true
            },
            {
              "text": "Bilateral symmetrical swelling and warmth of the 2nd and 3rd MCP joints",
              "correct": false
            },
            {
              "text": "Oral body temperature of 38.1 °C",
              "correct": false
            },
            {
              "text": "Measured wrist flexion of 30 degrees",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Symptoms are subjective evidence of a disease that can only be evaluated and described by the client (such as joint pain rated 8/10, the sensation of morning stiffness, and feelings of fatigue and malaise). Signs are objective evidence of a disease that can be evaluated, measured, or directly observed by the healthcare professional (such as visible/palpable joint swelling and warmth, a measured body temperature of 38.1 °C, and measured degrees of joint flexion)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "Complete the following sentences regarding the stages and clinical course of Evelyn's condition by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The 8-month period during which autoantibodies were present in Evelyn's circulation without any detectable signs or symptoms represents the [[drop0]] stage. The 10-day period of vague malaise and generalized fatigue that directly preceded the appearance of joint inflammation constitutes the [[drop1]] stage. The sudden, severe flare-up of intense joint redness, heat, and swelling following a viral illness represents an [[drop2]].",
            "dropdowns": [
              {
                "options": [
                  {
                    "text": "subclinical",
                    "correct": true
                  },
                  {
                    "text": "acute",
                    "correct": false
                  },
                  {
                    "text": "convalescence",
                    "correct": false
                  },
                  {
                    "text": "sequelae",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "prodromal",
                    "correct": true
                  },
                  {
                    "text": "latent",
                    "correct": false
                  },
                  {
                    "text": "chronic",
                    "correct": false
                  },
                  {
                    "text": "remission",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              },
              {
                "options": [
                  {
                    "text": "exacerbation",
                    "correct": true
                  },
                  {
                    "text": "remission",
                    "correct": false
                  },
                  {
                    "text": "convalescence",
                    "correct": false
                  },
                  {
                    "text": "incubation",
                    "correct": false
                  }
                ],
                "placeholder": "Select..."
              }
            ]
          },
          "options": [],
          "preamble": "The nurse analyzes Evelyn's history and reviews newly available laboratory and imaging findings (see Diagnostic and Laboratory Findings tab).",
          "explanation": "The subclinical stage occurs when a disease process is active in the body without apparent clinical manifestations (e.g., autoantibodies present before physical symptoms). The prodromal stage is the brief period before the onset of acute disease characterized by vague, premonitory symptoms (e.g., generalized malaise and fatigue). An exacerbation is an acute increase in the severity of a disease or any of its clinical manifestations."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            },
            {
              "id": "diag_2",
              "title": "Diagnostic and Laboratory Findings",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Diagnostic Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Erythrocyte Sedimentation Rate (ESR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">68 mm/hr (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 20 mm/hr</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>C-Reactive Protein (CRP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">34 mg/L (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 3.0 mg/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Rheumatoid Factor (RF)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Positive (112 IU/mL)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 14 IU/mL</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Hand & Wrist Ultrasound / X-Ray</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Significant acute synovial tissue thickening and active hypervascular effusion (synovitis); early focal discontinuity of the marginal articular cartilage (early erosion lesion). No fixed bone subluxation or ankylosis.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: intact articular cartilage and clear synovial space</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "For each clinical occurrence in Evelyn's case, click to match it with its correct pathophysiological classification.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "The acute viral respiratory infection that triggered the sudden onset of joint swelling",
                "correctIndex": 3,
                "correctIndices": [
                  3
                ]
              },
              {
                "text": "Female sex and positive family history of autoimmune connective tissue disease",
                "correctIndex": 4,
                "correctIndices": [
                  4
                ]
              },
              {
                "text": "Early focal discontinuity and erosion of the articular cartilage detected on joint ultrasound",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Development of oral candidiasis (thrush) resulting from prescribed high-dose corticosteroid treatment",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Development of an acute secondary soft-tissue abscess arising during the course of severe synovial inflammation",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              }
            ],
            "columns": [
              "Lesion",
              "Complication",
              "Iatrogenic Condition",
              "Precipitating Factor",
              "Predisposing Factor"
            ],
            "firstColumnHeader": "Clinical Occurrence"
          },
          "options": [],
          "preamble": "",
          "explanation": "According to Unit 1 definitions: Precipitating factors are factors that trigger the onset of an acute disease/condition (e.g., the viral respiratory infection). Predisposing factors are factors that increase the risk of developing a disease/condition (e.g., female sex, genetics, and family history). A lesion is any pathological or traumatic discontinuity of tissue (e.g., focal erosion/discontinuity of articular cartilage). An iatrogenic condition results from the activity of healthcare professionals or prescribed medical/nursing interventions or treatments (e.g., oral thrush arising from corticosteroid immunosuppression). A complication is a disease or condition arising during the course of or as a consequence of another disease (e.g., secondary soft-tissue infection)."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            },
            {
              "id": "diag_2",
              "title": "Diagnostic and Laboratory Findings",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Diagnostic Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Erythrocyte Sedimentation Rate (ESR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">68 mm/hr (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 20 mm/hr</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>C-Reactive Protein (CRP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">34 mg/L (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 3.0 mg/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Rheumatoid Factor (RF)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Positive (112 IU/mL)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 14 IU/mL</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Hand & Wrist Ultrasound / X-Ray</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Significant acute synovial tissue thickening and active hypervascular effusion (synovitis); early focal discontinuity of the marginal articular cartilage (early erosion lesion). No fixed bone subluxation or ankylosis.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: intact articular cartilage and clear synovial space</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "The nurse is analyzing health promotion and preventative measures related to autoimmune disorders. For each intervention, click to specify whether it represents <b>primary prevention</b>, <b>secondary prevention</b>, or <b>tertiary prevention</b>.",
          "type": "matrix_mc",
          "matrix": {
            "rows": [
              {
                "text": "Providing smoking-cessation education and environmental hazard counseling to high-risk individuals to reduce risk factors before autoimmune illness develops.",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Screening first-degree relatives of affected clients for serum autoantibodies (RF and anti-CCP) to detect subclinical disease early.",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Administering prescribed disease-modifying antirheumatic drugs (DMARDs) and short-term corticosteroids to treat Evelyn's established synovial inflammation.",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Referring the client to physical and occupational therapy for joint splinting and energy-conservation training to preserve joint function.",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Performing routine musculoskeletal joint examinations and screening imaging in clients with early vague symptoms to diagnose arthritis before irreversible damage occurs.",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              }
            ],
            "columns": [
              "Primary Prevention",
              "Secondary Prevention",
              "Tertiary Prevention"
            ],
            "firstColumnHeader": "Intervention"
          },
          "options": [],
          "preamble": "",
          "explanation": "Primary prevention keeps disease from occurring by removing or reducing risk factors in susceptible individuals (e.g., smoking cessation to reduce autoimmune trigger risk). Secondary prevention focuses on early screening, detection, and diagnosis of disease when asymptomatic or in early stages (e.g., autoantibody screening and early joint screening). Tertiary prevention consists of all medical, nursing, and physical therapy interventions to treat an established disease and prevent worsening disability or deformity."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            },
            {
              "id": "diag_2",
              "title": "Diagnostic and Laboratory Findings",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Diagnostic Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Erythrocyte Sedimentation Rate (ESR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">68 mm/hr (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 20 mm/hr</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>C-Reactive Protein (CRP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">34 mg/L (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 3.0 mg/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Rheumatoid Factor (RF)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Positive (112 IU/mL)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 14 IU/mL</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Hand & Wrist Ultrasound / X-Ray</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Significant acute synovial tissue thickening and active hypervascular effusion (synovitis); early focal discontinuity of the marginal articular cartilage (early erosion lesion). No fixed bone subluxation or ankylosis.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: intact articular cartilage and clear synovial space</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "The nurse is planning direct care and discharge teaching for Evelyn during this acute exacerbation. Which actions should the nurse implement? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Teach the client to identify prodromal symptoms (such as mild fatigue and subtle stiffness) so medical therapy can be initiated before a severe exacerbation occurs.",
              "correct": true
            },
            {
              "text": "Monitor the client for iatrogenic adverse effects of prescribed immunosuppressants and corticosteroids, including opportunistic infections and hyperglycemia.",
              "correct": true
            },
            {
              "text": "Explain that physical and emotional stressors can act as precipitating factors that trigger future disease exacerbations.",
              "correct": true
            },
            {
              "text": "Advise the client to perform strenuous, high-resistance weight training on the actively inflamed wrist joints to prevent stiffness.",
              "correct": false
            },
            {
              "text": "Inform the client that once joint swelling disappears, the disease is cured and all medications can be permanently stopped.",
              "correct": false
            },
            {
              "text": "Provide education on energy conservation and joint-protection techniques to preserve physical mobility during convalescence.",
              "correct": true
            }
          ],
          "preamble": "",
          "explanation": "Appropriate interventions include teaching the client to identify prodromal warning cues, monitoring for iatrogenic complications from prescribed therapies, educating on precipitating factors, and supporting joint protection during convalescence. Strenuous loading on actively inflamed joints accelerates cartilage lesions and tissue trauma. Chronic autoimmune diseases enter remission rather than permanent cure, and abrupt drug cessation can precipitate a severe rebound exacerbation."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            },
            {
              "id": "diag_2",
              "title": "Diagnostic and Laboratory Findings",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Diagnostic Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Erythrocyte Sedimentation Rate (ESR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">68 mm/hr (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 20 mm/hr</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>C-Reactive Protein (CRP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">34 mg/L (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 3.0 mg/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Rheumatoid Factor (RF)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Positive (112 IU/mL)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 14 IU/mL</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Hand & Wrist Ultrasound / X-Ray</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Significant acute synovial tissue thickening and active hypervascular effusion (synovitis); early focal discontinuity of the marginal articular cartilage (early erosion lesion). No fixed bone subluxation or ankylosis.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: intact articular cartilage and clear synovial space</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The nurse evaluates Evelyn's clinical status at her 6-month follow-up visit (see Follow-Up Assessment tab). Which interpretations are correct? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "The disappearance of joint swelling, heat, and elevated inflammatory markers indicates that Evelyn is in a state of clinical <b>remission</b>.",
              "correct": true
            },
            {
              "text": "The persistent ulnar deviation and slight reduction in wrist extension represent a <b>sequela</b> resulting from the preceding inflammatory joint disease.",
              "correct": true
            },
            {
              "text": "The client's successful return to full-time work and independent living reflects a substantial reduction in individual <b>morbidity</b>.",
              "correct": true
            },
            {
              "text": "Because Evelyn has achieved remission, her autoimmune disorder has been completely eradicated with zero risk of future exacerbations.",
              "correct": false
            },
            {
              "text": "Evelyn's functional <b>prognosis</b> is favorable based on early diagnosis, therapeutic adherence, and stable joint architecture.",
              "correct": true
            },
            {
              "text": "The development of oral thrush during corticosteroid therapy represents an idiopathic manifestation unrelated to her medical treatment.",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Remission is the temporary, partial, or complete disappearance of the clinical manifestations of a disease without being cured. Sequelae are any lesions, disorders, or pathological conditions that result from a preceding disease or accident (such as permanent joint deformity or restriction). Morbidity is a diseased condition or state, which has substantially improved with functional recovery. Prognosis is a forecast as to the probable course and outcome of the disease. Remission does not mean the disease is eradicated. Oral thrush resulting from corticosteroid immunosuppression is iatrogenic, not idiopathic."
        },
        "leftContent": {
          "tabs": [
            {
              "id": "nn_2",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Client presents accompanied by her spouse for evaluation of bilateral hand and wrist symptoms. Evelyn reports that approximately 8 months ago, routine wellness bloodwork ordered by her family physician for non-specific fatigue revealed a positive antinuclear antibody (ANA) and elevated rheumatoid factor (RF), although she had zero joint pain, zero swelling, and completely normal physical function at that time. Approximately 3 weeks ago, she experienced a 10-day period of vague, generalized malaise, mild muscle achiness, low-grade fatigue, and a feeling of 'coming down with something' without distinct localized joint symptoms. Five days ago, following a severe acute upper respiratory viral illness, she suddenly awoke with intense throbbing pain, visible redness, warmth, and pronounced swelling in both wrists and the second and third metacarpophalangeal (MCP) joints bilaterally. She states her morning stiffness now lasts over 2.5 hours before she can bend her fingers to hold a coffee cup. Medical history: no previous chronic illness; no regular medications prior to this flare. Denies smoking or alcohol. Family history: maternal grandmother had severe rheumatoid arthritis resulting in hand joint deformities.</span></p>"
            },
            {
              "id": "vs_2",
              "title": "Vital Signs and Physical Assessment",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter / Assessment</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Finding (0900 Today)</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Clinical Reference</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Temperature (T)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C (oral, low-grade fever)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5–37.5 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Heart Rate (P)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 bpm, regular</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">60–100 bpm</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Respiratory Rate (RR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">18 breaths/min</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12–20 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Blood Pressure (BP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116/72 mmHg</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Musculoskeletal Inspection</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bilateral symmetric boggy swelling, erythema, and palpable warmth of the 2nd and 3rd MCP joints and bilateral carpal joints. No gross structural deformities present.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: no swelling, redness, or heat</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Pain & Range of Motion</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client rates bilateral hand/wrist joint pain as 8/10 on numeric scale; wrist flexion measured at 30° bilaterally (limited by pain and edema).</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal wrist flexion: 60–80°</td></tr></tbody></table>"
            },
            {
              "id": "diag_2",
              "title": "Diagnostic and Laboratory Findings",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Diagnostic Test</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Result</th><th placeholder=\"Header 3\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Erythrocyte Sedimentation Rate (ESR)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">68 mm/hr (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 20 mm/hr</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>C-Reactive Protein (CRP)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">34 mg/L (markedly elevated)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 3.0 mg/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Rheumatoid Factor (RF)</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Positive (112 IU/mL)</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">&lt; 14 IU/mL</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Hand & Wrist Ultrasound / X-Ray</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Significant acute synovial tissue thickening and active hypervascular effusion (synovitis); early focal discontinuity of the marginal articular cartilage (early erosion lesion). No fixed bone subluxation or ankylosis.</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Normal: intact articular cartilage and clear synovial space</td></tr></tbody></table>"
            },
            {
              "id": "fu_2",
              "title": "Follow-Up Assessment (6 Months Later)",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">6-Month Follow-Up Finding</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Clinical Status</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Active joint warmth and erythema have resolved completely. Morning joint stiffness has decreased from 2.5 hours to less than 10 minutes. Evelyn reports pain rated 1/10 occasionally after prolonged computer typing.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Inflammatory Biomarkers</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">ESR: 14 mm/hr (normal); CRP: 2.1 mg/L (normal).</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Structural Assessment</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">X-ray shows stable joint architecture without new erosive lesions. However, mild permanent limitation in end-range wrist extension (50° vs normal 70°) and a slight persistent ulnar deviation of the left 3rd digit are documented.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Medication Adverse Effects</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">During month 2 of high-dose prednisone therapy, Evelyn developed white curd-like oral patches diagnosed as oral candidiasis (thrush), which resolved following prescribed nystatin oral suspension. Prednisone has since been successfully tapered off, and she remains stable on methotrexate.</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><b>Function and Employment</b></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Client has resumed full-time employment as an accountant with ergonomic keyboard modifications. She reports high quality of life and independent self-care.</td></tr></tbody></table>"
            }
          ],
          "intro": "The outpatient rheumatology and ambulatory clinic nurse is caring for Evelyn, a 29-year-old woman who presents with progressive joint swelling, morning stiffness, severe fatigue, and pain in both hands and wrists."
        }
      }
    ],
    "disorder": "Unit 1 (Introduction to Pathophysiology)",
    "description": "A case study for formative review of NURS 1017 Unit 1",
    "availability": "all",
    "course": "NURS 1017",
    "unit": "Unit 1 (Introduction to Pathophysiology)"
  },
  {
    "id": "case_1789753289436",
    "title": "New Case Study",
    "description": "",
    "screens": [
      {
        "step": 1,
        "leftContent": {
          "intro": "",
          "tabs": [
            {
              "id": "nn_1789753289436",
              "title": "Nurses' Notes",
              "content": ""
            }
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "",
          "options": [
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "explanation": "",
          "preamble": ""
        }
      }
    ],
    "disorder": "Others",
    "course": "",
    "unit": "Others",
    "topic": "Others"
  },
  {
    "id": "case_1782360000001",
    "title": "NURS 1017 Unit 2 Case Study 1",
    "topic": "Unit 2 (Cellular Basis of Disease)",
    "unit": "Unit 2 (Cellular Basis of Disease)",
    "disorder": "Unit 2 (Cellular Basis of Disease)",
    "course": "NURS 1017",
    "description": "58-year-old male with chronic GERD, smoking, and hypertension presenting with Barrett's metaplasia, bronchial squamous metaplasia, and left ventricular hypertrophy.",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "The nurse reviews Arthur's history, physical assessment, and diagnostic reports. Which of the following findings reflect <b>cellular adaptation</b> in response to chronic environmental stress or increased workload? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Conversion of distal esophageal stratified squamous epithelium to columnar epithelium with goblet cells",
              "correct": true
            },
            {
              "text": "Replacement of ciliated pseudostratified columnar epithelium by stratified squamous epithelium in the mainstem bronchi",
              "correct": true
            },
            {
              "text": "Echocardiogram demonstrating left ventricular myocardial wall thickness of 1.5 cm in response to chronic hypertension",
              "correct": true
            },
            {
              "text": "Historical reduction in right calf muscle circumference following 10 weeks of non-weight-bearing cast immobilization",
              "correct": true
            },
            {
              "text": "Acute temperature elevation of 39.5 °C with purulent sputum and marked leukocytosis",
              "correct": false
            },
            {
              "text": "Profuse arterial hypotension with cardiogenic shock and pulmonary edema",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Cellular adaptations are reversible changes in cell size, number, phenotype, metabolic activity, or organization in response to altered physiological demand or chronic environmental stress. In this client, adaptations include: (1) Barrett's esophagus—glandular metaplasia of esophageal stratified squamous epithelium to columnar epithelium to better tolerate acidic gastric juice; (2) Squamous metaplasia of respiratory pseudostratified ciliated columnar epithelium to stratified squamous epithelium due to chronic cigarette smoke; (3) Left ventricular hypertrophy—increased cardiomyocyte size in response to chronic hemodynamic afterload; and (4) Disuse atrophy—shrinkage of skeletal muscle cells from decreased functional demand during casting. High fever with purulent sputum indicates acute infection/inflammation, while shock indicates cardiovascular collapse, neither of which represents an adaptive cellular response."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Vital Sign</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Outpatient Clinic (Today, 0800)</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Temperature</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">36.8 °C (oral)</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">36.5 – 37.5 °C</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Heart Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">82 bpm, regular</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">60 – 100 bpm</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Respiratory Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">18 breaths/min</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">12 – 20 breaths/min</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Blood Pressure</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">158/94 mmHg</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">&lt; 120/80 mmHg</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">95% on room air</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">95 – 100%</td></tr></tbody></table>"
            }
          ]
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "The nurse analyzes the client's clinical and diagnostic findings. For each finding, click to specify the corresponding <b>cellular adaptation or tissue alteration</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Clinical & Pathological Finding",
            "columns": [
              "Atrophy",
              "Hypertrophy",
              "Metaplasia",
              "Dysplasia"
            ],
            "rows": [
              {
                "text": "Left ventricular myocardial wall thickness of 1.5 cm in response to chronic elevated systemic vascular resistance",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Conversion of distal esophageal stratified squamous epithelium to mucin-secreting columnar epithelium (Barrett's mucosa)",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Shrinkage in skeletal muscle cell diameter and loss of mass following prolonged limb immobilization in a cast",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Replacement of ciliated pseudostratified columnar epithelium with stratified squamous epithelium in the main bronchi",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Marked cellular pleomorphism, nuclear enlargement, hyperchromatism, and disordered stratification in the mucosal biopsy",
                "correctIndex": 3,
                "correctIndices": [
                  3
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Endoscopy, echocardiography, and biopsy pathology reports have been added to the client's chart (see Diagnostic Reports tab).",
          "explanation": "1. Hypertrophy: Increase in individual cell size resulting in overall organ enlargement, typical in non-dividing cells like cardiac myocytes adapting to chronic pressure overload (hypertension).\n2. Metaplasia: Reversible transformation of one differentiated adult cell type into another differentiated cell type that better withstands a noxious microenvironment (e.g., columnar epithelium replacing squamous in the esophagus, or squamous replacing ciliated columnar in bronchial airways).\n3. Atrophy: Reduction in cell size and functional capacity due to decreased workload/disuse, loss of innervation, or diminished blood supply.\n4. Dysplasia: Disordered growth and maturation characterized by variation in cellular size and shape, hyperchromatic enlarged nuclei, and architectural disarray; it is a pre-malignant alteration that may progress to neoplasia."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p>"
            },
            {
              "id": "diag_1",
              "title": "Diagnostic Reports",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Upper Endoscopy (EGD) & Mucosal Biopsy:</b><br>Esophagitis with salmon-pink mucosal tongues extending 3.5 cm circumferentially above the gastroesophageal junction. Biopsy confirms Barrett's esophagus with intestinal metaplasia (stratified squamous epithelium replaced by glandular columnar epithelium containing goblet cells). Focal areas demonstrate low-grade dysplasia with cellular pleomorphism, nuclear enlargement, and hyperchromatism, without invasion through the basement membrane.</p><p style=\"margin-top:10px;\"><b>Bronchoscopy & Endobronchial Biopsy:</b><br>Right and left mainstem bronchi demonstrate erythematous, friable mucosa with loss of glistening ciliated surface. Biopsy reveals squamous metaplasia: respiratory ciliated pseudostratified columnar epithelium has been replaced by multi-layered stratified squamous epithelium.</p><p style=\"margin-top:10px;\"><b>Transthoracic Echocardiogram:</b><br>Concentric left ventricular hypertrophy (LVH). Interventricular septal wall thickness: 1.5 cm (reference: 0.6–1.1 cm). Left ventricular posterior wall thickness: 1.4 cm (reference: 0.6–1.1 cm). Estimated ejection fraction: 58%. Grade I diastolic dysfunction consistent with chronic systemic arterial hypertension.</p></div>"
            }
          ]
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "The nurse is analyzing Arthur's risk for neoplastic transformation. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "Metaplasia is defined as the [[drop0]] conversion of one differentiated cell type to another in response to chronic persistent injury. In the client's airways, replacement of ciliated columnar cells with stratified squamous epithelium protects against smoke but results in loss of [[drop1]]. If the chronic noxious irritation is not removed, the tissue can evolve into [[drop2]], which is characterized by disordered maturation and cellular pleomorphism. In severe cases, progression to autonomous malignant tissue with complete loss of cellular differentiation is termed [[drop3]].",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "reversible",
                    "correct": true
                  },
                  {
                    "text": "irreversible",
                    "correct": false
                  },
                  {
                    "text": "malignant",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "mucociliary clearance and protection",
                    "correct": true
                  },
                  {
                    "text": "cardiac contractility",
                    "correct": false
                  },
                  {
                    "text": "alveolar surfactant production",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "dysplasia",
                    "correct": true
                  },
                  {
                    "text": "atrophy",
                    "correct": false
                  },
                  {
                    "text": "hyperplasia",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "anaplasia",
                    "correct": true
                  },
                  {
                    "text": "hypertrophy",
                    "correct": false
                  },
                  {
                    "text": "metaplasia",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "The nurse analyzes the pathophysiology underlying Arthur's epithelial transformations and long-term oncology risks.",
          "explanation": "Metaplasia is fundamentally a reversible adaptive response where one differentiated cell type (e.g., ciliated columnar in bronchial airways, or stratified squamous in esophagus) is substituted by another differentiated cell type that better tolerates the chronic injury. However, in the lungs, squamous epithelium lacks cilia and mucus-producing goblet cells, eliminating vital mucociliary clearance and predisposing to chronic mucous plugging and recurrent infections. If the noxious stimulus persists, metaplasia can progress to dysplasia ('disordered growth'), characterized by loss of architectural uniformity and cellular pleomorphism—a recognized pre-cancerous condition. When malignant transformation occurs and cells completely lose cellular differentiation, orientation, and specialized function, it is termed anaplasia, the hallmark of malignant neoplasms."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p>"
            },
            {
              "id": "diag_1",
              "title": "Diagnostic Reports",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Upper Endoscopy (EGD) & Mucosal Biopsy:</b><br>Esophagitis with salmon-pink mucosal tongues extending 3.5 cm circumferentially above the gastroesophageal junction. Biopsy confirms Barrett's esophagus with intestinal metaplasia (stratified squamous epithelium replaced by glandular columnar epithelium containing goblet cells). Focal areas demonstrate low-grade dysplasia with cellular pleomorphism, nuclear enlargement, and hyperchromatism, without invasion through the basement membrane.</p><p style=\"margin-top:10px;\"><b>Bronchoscopy & Endobronchial Biopsy:</b><br>Right and left mainstem bronchi demonstrate erythematous, friable mucosa with loss of glistening ciliated surface. Biopsy reveals squamous metaplasia: respiratory ciliated pseudostratified columnar epithelium has been replaced by multi-layered stratified squamous epithelium.</p><p style=\"margin-top:10px;\"><b>Transthoracic Echocardiogram:</b><br>Concentric left ventricular hypertrophy (LVH). Interventricular septal wall thickness: 1.5 cm (reference: 0.6–1.1 cm). Left ventricular posterior wall thickness: 1.4 cm (reference: 0.6–1.1 cm). Estimated ejection fraction: 58%. Grade I diastolic dysfunction consistent with chronic systemic arterial hypertension.</p></div>"
            }
          ]
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "The nurse is planning care for Arthur to promote cellular recovery, eliminate chronic cellular stressors, and prevent neoplastic progression. Which of the following nursing interventions should the nurse include in the client's plan of care? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Provide education and supportive resources for a structured smoking cessation program to remove chronic bronchial mucosal irritation",
              "correct": true
            },
            {
              "text": "Administer prescribed proton pump inhibitor (PPI) therapy to suppress gastric acid exposure to the esophageal mucosa",
              "correct": true
            },
            {
              "text": "Educate the client on anti-reflux lifestyle measures, including elevating the head of the bed 15 to 20 cm and avoiding meals within 3 hours of sleep",
              "correct": true
            },
            {
              "text": "Administer prescribed antihypertensive medication to reduce systemic cardiac workload and promote regression of left ventricular hypertrophy",
              "correct": true
            },
            {
              "text": "Reinforce the importance of attending scheduled surveillance endoscopies with mucosal biopsies to monitor for dysplastic progression",
              "correct": true
            },
            {
              "text": "Prepare the client for an immediate surgical esophagectomy with radiation therapy",
              "correct": false
            }
          ],
          "preamble": "The nurse develops a nursing plan of care aimed at arresting and reversing Arthur's cellular adaptations and pre-neoplastic changes.",
          "explanation": "Nursing interventions for clients with adaptive cellular responses and low-grade dysplasia focus on removing noxious stimuli, administering prescribed protective therapies, and health teaching: (1) Smoking cessation education removes toxic combustion products, allowing respiratory stem cells to regenerate ciliated columnar morphology; (2) Administering prescribed PPIs reduces chemical acid/peptic injury to the distal esophagus; (3) Elevating the head of the bed and meal timing physically reduces nocturnal reflux; (4) Administering prescribed antihypertensives lowers systemic afterload, halting or regressing left ventricular hypertrophy; (5) Reinforcing surveillance endoscopy ensures early detection if dysplasia advances. Preparing for esophagectomy and radiation is incorrect, as radical surgery and radiotherapy are reserved for invasive malignancy, not low-grade pre-invasive dysplasia."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p>"
            },
            {
              "id": "diag_1",
              "title": "Diagnostic Reports",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Upper Endoscopy (EGD) & Mucosal Biopsy:</b><br>Esophagitis with salmon-pink mucosal tongues extending 3.5 cm circumferentially above the gastroesophageal junction. Biopsy confirms Barrett's esophagus with intestinal metaplasia (stratified squamous epithelium replaced by glandular columnar epithelium containing goblet cells). Focal areas demonstrate low-grade dysplasia with cellular pleomorphism, nuclear enlargement, and hyperchromatism, without invasion through the basement membrane.</p><p style=\"margin-top:10px;\"><b>Bronchoscopy & Endobronchial Biopsy:</b><br>Right and left mainstem bronchi demonstrate erythematous, friable mucosa with loss of glistening ciliated surface. Biopsy reveals squamous metaplasia: respiratory ciliated pseudostratified columnar epithelium has been replaced by multi-layered stratified squamous epithelium.</p><p style=\"margin-top:10px;\"><b>Transthoracic Echocardiogram:</b><br>Concentric left ventricular hypertrophy (LVH). Interventricular septal wall thickness: 1.5 cm (reference: 0.6–1.1 cm). Left ventricular posterior wall thickness: 1.4 cm (reference: 0.6–1.1 cm). Estimated ejection fraction: 58%. Grade I diastolic dysfunction consistent with chronic systemic arterial hypertension.</p></div>"
            }
          ]
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "The nurse is taking action to provide discharge counseling and education to Arthur. For each nursing action or client instruction, click to specify whether it is <b>Indicated</b>, <b>Non-Essential</b>, or <b>Contraindicated</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Nursing Action / Client Instruction",
            "columns": [
              "Indicated",
              "Non-Essential",
              "Contraindicated"
            ],
            "rows": [
              {
                "text": "Educate the client that he can stop taking prescribed proton pump inhibitors once his heartburn symptoms resolve for 3 consecutive days",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Instruct the client to immediately report 'red flag' symptoms such as progressive difficulty swallowing solid food, unintentional weight loss, or vomiting blood",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Advise the client to use a bed wedge or blocks under bedposts to elevate the head of the bed 15 to 20 cm during sleep",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Request a provider prescription for weekly routine chest computed tomography (CT) scans to screen for lung nodules",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Reassure the client that because metaplasia is an adaptive response, it carries zero risk of transforming into cancer",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              }
            ]
          },
          "options": [],
          "preamble": "The nurse conducts a targeted patient education and discharge counseling session with Arthur.",
          "explanation": "1. Contraindicated: Acid suppression in Barrett's esophagus must be maintained continuously as prescribed; chemical acid exposure continues to cause DNA damage even if sensory nerve endings become desensitized.\n2. Indicated: Progressive dysphagia, weight loss, or hematemesis are alarm cues suggesting esophageal stricture or adenocarcinoma progression, warranting immediate medical evaluation.\n3. Indicated: Nocturnal head-of-bed elevation utilizes gravity to prevent retrograde acid flow and pooling in the esophagus.\n4. Non-Essential: Weekly CT scans deliver unnecessary radiation and are non-essential; annual low-dose chest CT is the standard screening protocol for high-risk smokers.\n5. Contraindicated: While metaplasia is an adaptive response that is initially non-malignant, persistent chronic injury causes genetic mutations leading to pre-malignant dysplasia and potential progression to adenocarcinoma."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p>"
            },
            {
              "id": "diag_1",
              "title": "Diagnostic Reports",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Upper Endoscopy (EGD) & Mucosal Biopsy:</b><br>Esophagitis with salmon-pink mucosal tongues extending 3.5 cm circumferentially above the gastroesophageal junction. Biopsy confirms Barrett's esophagus with intestinal metaplasia (stratified squamous epithelium replaced by glandular columnar epithelium containing goblet cells). Focal areas demonstrate low-grade dysplasia with cellular pleomorphism, nuclear enlargement, and hyperchromatism, without invasion through the basement membrane.</p><p style=\"margin-top:10px;\"><b>Bronchoscopy & Endobronchial Biopsy:</b><br>Right and left mainstem bronchi demonstrate erythematous, friable mucosa with loss of glistening ciliated surface. Biopsy reveals squamous metaplasia: respiratory ciliated pseudostratified columnar epithelium has been replaced by multi-layered stratified squamous epithelium.</p><p style=\"margin-top:10px;\"><b>Transthoracic Echocardiogram:</b><br>Concentric left ventricular hypertrophy (LVH). Interventricular septal wall thickness: 1.5 cm (reference: 0.6–1.1 cm). Left ventricular posterior wall thickness: 1.4 cm (reference: 0.6–1.1 cm). Estimated ejection fraction: 58%. Grade I diastolic dysfunction consistent with chronic systemic arterial hypertension.</p></div>"
            }
          ]
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The nurse evaluates Arthur's clinical status at the 12-month follow-up visit. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "At Arthur's 12-month follow-up, successful smoking cessation has allowed his bronchial mucosa to reverse squamous metaplasia and regenerate normal [[drop0]] epithelium. Strict blood pressure control has arrested further progression of [[drop1]]. A repeat endoscopy revealing regression of low-grade dysplasia and stabilization of mucosal architecture confirms that early cellular adaptations and dysplasia are [[drop2]] when the initiating chronic stressor is eliminated.",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "pseudostratified ciliated columnar",
                    "correct": true
                  },
                  {
                    "text": "stratified squamous",
                    "correct": false
                  },
                  {
                    "text": "transitional",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "left ventricular hypertrophy",
                    "correct": true
                  },
                  {
                    "text": "cerebral atrophy",
                    "correct": false
                  },
                  {
                    "text": "prostatic hyperplasia",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "reversible",
                    "correct": true
                  },
                  {
                    "text": "inevitably malignant",
                    "correct": false
                  },
                  {
                    "text": "permanent and irreversible",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "At the 12-month follow-up visit, Arthur reports he has quit smoking completely for 10 months, adheres to his prescribed ramipril and esomeprazole, and participates in regular aerobic walking.",
          "explanation": "The removal of noxious stimuli allows tissues with dividing stem cell populations to reverse adaptive metaplasia and early low-grade dysplasia. In the respiratory tract, differentiated pseudostratified ciliated columnar epithelium is regenerated by basal stem cells once tobacco smoke toxins are eliminated. Similarly, lowering systemic blood pressure decreases myocardial wall tension, reversing hemodynamic overload and halting left ventricular hypertrophy. This clinical case illustrates the fundamental pathophysiological principle: cellular adaptation and mild dysplasia are reversible upon removal of environmental stressors, preventing progression to irreversible malignant neoplasia."
        },
        "leftContent": {
          "intro": "The nurse in an outpatient gastroenterology and pulmonology clinic is reviewing the clinical records of Arthur Vance, a 58-year-old male presenting for evaluation of chronic gastroesophageal reflux disease (GERD), long-standing cigarette smoking, and progressive exertional shortness of breath.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0800:</span><span class=\"nurse-note-text\">Arthur Vance, a 58-year-old male, presents for evaluation of persistent, daily retrosternal burning (heartburn) and acidic regurgitation for over 12 years. Over the past 18 months, symptoms have intensified despite self-medicating with over-the-counter antacids; he reports occasional difficulty swallowing tough meats. He has smoked 1 pack of cigarettes daily for 38 years (~38 pack-years) and reports a chronic morning cough productive of tenacious grey-white mucus. He notes progressive exertional shortness of breath when climbing more than one flight of stairs. Medical history: essential hypertension diagnosed 7 years ago, poorly adherent to prescribed medications; denies history of myocardial infarction or stroke. Orthopedic history: sustained a right tibial fracture 4 years ago requiring 10 weeks of rigid cast immobilization; he recalls his right calf was visibly shrunken, weak, and thin compared to the left upon cast removal, which gradually improved with physical therapy rehabilitation.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">12-Month Follow-Up:</span><span class=\"nurse-note-text\">Arthur returns for annual review. He has achieved 10 months of complete smoking cessation confirmed by exhaled carbon monoxide testing. Blood pressure today is 124/78 mmHg on ramipril 10 mg daily. Reflux symptoms have completely resolved on esomeprazole 40 mg daily. Repeat surveillance EGD with targeted biopsies reveals intact mucosal lining without dysplastic progression. Repeat spirometry shows improved FEV1.</span></p>"
            },
            {
              "id": "diag_1",
              "title": "Diagnostic Reports",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Upper Endoscopy (EGD) & Mucosal Biopsy:</b><br>Esophagitis with salmon-pink mucosal tongues extending 3.5 cm circumferentially above the gastroesophageal junction. Biopsy confirms Barrett's esophagus with intestinal metaplasia (stratified squamous epithelium replaced by glandular columnar epithelium containing goblet cells). Focal areas demonstrate low-grade dysplasia with cellular pleomorphism, nuclear enlargement, and hyperchromatism, without invasion through the basement membrane.</p><p style=\"margin-top:10px;\"><b>Bronchoscopy & Endobronchial Biopsy:</b><br>Right and left mainstem bronchi demonstrate erythematous, friable mucosa with loss of glistening ciliated surface. Biopsy reveals squamous metaplasia: respiratory ciliated pseudostratified columnar epithelium has been replaced by multi-layered stratified squamous epithelium.</p><p style=\"margin-top:10px;\"><b>Transthoracic Echocardiogram:</b><br>Concentric left ventricular hypertrophy (LVH). Interventricular septal wall thickness: 1.5 cm (reference: 0.6–1.1 cm). Left ventricular posterior wall thickness: 1.4 cm (reference: 0.6–1.1 cm). Estimated ejection fraction: 58%. Grade I diastolic dysfunction consistent with chronic systemic arterial hypertension.</p></div>"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "case_1782360000002",
    "title": "NURS 1017 Unit 2 Case Study 2",
    "topic": "Unit 2 (Cellular Basis of Disease)",
    "unit": "Unit 2 (Cellular Basis of Disease)",
    "disorder": "Unit 2 (Cellular Basis of Disease)",
    "course": "NURS 1017",
    "description": "46-year-old female with chronic alcohol abuse and malnutrition presenting with severe hepatic steatosis, hydropic swelling, and proteasome stress.",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "The nurse reviews Elena's clinical presentation, laboratory results, and liver biopsy findings. Which of the following findings are characteristic features of <b>reversible cellular injury</b> and <b>intracellular accumulations</b>? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Hepatocyte hydropic swelling with expanded, pale cytoplasm and cellular enlargement (ballooning degeneration)",
              "correct": true
            },
            {
              "text": "Intracellular accumulation of macrovesicular and microvesicular lipid vacuoles within hepatocytes",
              "correct": true
            },
            {
              "text": "Dilation of the endoplasmic reticulum with ribosome detachment on electron microscopy",
              "correct": true
            },
            {
              "text": "Preservation of hepatocyte plasma membrane and nuclear envelope integrity",
              "correct": true
            },
            {
              "text": "Extensive nuclear karyorrhexis, chromatin disintegration, and plasma membrane lysis",
              "correct": false
            },
            {
              "text": "Formation of chalky white saponified fat deposits embedded in surrounding tissue",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Reversible cellular injury is characterized by: (1) Hydropic swelling—cellular volume expansion caused by ATP depletion and failure of the energy-dependent Na+/K+-ATPase exchange pump, causing intracellular sodium and water accumulation; (2) Intracellular accumulations—in this case, hepatic steatosis (triglyceride accumulation) resulting from alcohol-induced impairment of mitochondrial lipid metabolism; and (3) Ultrastructural changes including dilated endoplasmic reticulum, detachment/disaggregation of ribosomes, and mitochondrial swelling. Crucially, the cell's plasma membrane and nuclear structure remain intact. In contrast, nuclear dissolution (karyorrhexis, karyolysis) and membrane lysis indicate irreversible necrotic cell death. Saponified chalky white deposits are specific to fat necrosis (such as in acute pancreatitis)."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Parameter</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Admission (0900)</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Temperature</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">37.1 °C (oral)</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">36.5 – 37.5 °C</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Heart Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">96 bpm, regular</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">60 – 100 bpm</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Respiratory Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">18 breaths/min</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">12 – 20 breaths/min</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Blood Pressure</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">108/68 mmHg</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">90/60 – 120/80 mmHg</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Oxygen Saturation</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">98% on ambient room air</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">95 – 100%</td></tr></tbody></table>"
            }
          ]
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "The nurse analyzes the laboratory and liver biopsy reports. For each pathophysiological mechanism described below, click to match it with the correct <b>cellular alteration or repair pathway</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Pathophysiological Mechanism",
            "columns": [
              "Hydropic Swelling",
              "Intracellular Lipid Accumulation",
              "Chaperone Protein Refolding",
              "Ubiquitin-Proteasome Pathway"
            ],
            "rows": [
              {
                "text": "Ethanol metabolite-induced ATP depletion impairs plasma membrane Na+/K+ pumps, causing cytosolic sodium accumulation and osmotic water influx",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Impairment of mitochondrial beta-oxidation and decreased apolipoprotein synthesis leading to triglyceride entrapment inside hepatocytes",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Heat-shock proteins bind to denatured or misfolded polypeptides to facilitate their return to correct 3D tertiary conformation",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Severely damaged, non-refoldable proteins are tagged with regulatory polypeptides for enzymatic digestion inside cylindrical protease complexes",
                "correctIndex": 3,
                "correctIndices": [
                  3
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Laboratory and pathology results are now available in the electronic health record (see Laboratory & Pathology tab).",
          "explanation": "1. Hydropic swelling (cloudy swelling) occurs when cellular injury impairs ATP production, disabling the Na+/K+-ATPase pump; sodium accumulates intracellularly and draws water into the cytoplasm by osmosis.\n2. Intracellular lipid accumulation (hepatic steatosis) in alcoholism results from excess NADH production, impaired mitochondrial beta-oxidation of fatty acids, increased lipogenesis, and decreased apolipoprotein synthesis needed for VLDL export.\n3. Chaperone proteins (heat-shock proteins like Hsp70) bind misfolded nascent proteins to prevent aggregation and assist in proper 3D refolding under cellular stress.\n4. Ubiquitin-proteasome pathway: When chaperone-assisted refolding fails, abnormal proteins are polyubiquitinated, targeting them to the 26S proteasome for degradation into reusable peptides."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Pathology",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Serum Chemistry & Hepatic Enzymes:</b><br>• AST (Aspartate Aminotransferase): 284 U/L (Reference: 10–40 U/L)<br>• ALT (Alanine Aminotransferase): 142 U/L (Reference: 7–56 U/L) [AST:ALT ratio = 2.0]<br>• Total Bilirubin: 3.8 mg/dL (Reference: 0.2–1.2 mg/dL)<br>• Direct Bilirubin: 2.4 mg/dL (Reference: 0.0–0.3 mg/dL)<br>• Serum Albumin: 2.7 g/dL (Reference: 3.5–5.0 g/dL)<br>• Serum Lactic Acid: 2.4 mmol/L (Reference: 0.5–2.0 mmol/L)<br>• Serum Sodium: 132 mEq/L (Reference: 135–145 mEq/L)<br>• Blood Alcohol Concentration: 85 mg/dL</p><p style=\"margin-top:10px;\"><b>Liver Core Biopsy & Electron Microscopy:</b><br>Biopsy demonstrates diffuse macrovesicular and microvesicular hepatic steatosis with lipid droplets compressing hepatocyte nuclei. Pronounced hydropic swelling (ballooning degeneration) is evident throughout centrilobular zones. Electron microscopy reveals dilated cisternae of the endoplasmic reticulum with detached ribosomes, swollen mitochondria, and plasma membrane surface blebs. Nuclear chromatin is preserved without fragmentation, and the basal lamina is intact. Upregulated ubiquitin-proteasome intermediates and chaperone stress proteins are detected.</p></div>"
            }
          ]
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "The nurse is analyzing the cellular mechanisms contributing to Elena's condition. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "Hydropic swelling occurs when toxic injury and metabolic disruption deplete the cell's supply of [[drop0]], which directly impairs the plasma membrane [[drop1]]. As a consequence, sodium accumulates intracellularly and draws water into the cytoplasm by osmosis. Simultaneously, chronic alcohol intake disturbs intrahepatic lipid metabolism, resulting in the intracellular accumulation of [[drop2]]. Because the cell membranes and nuclear structures remain intact, these changes represent [[drop3]] cellular injury, which can completely resolve if alcohol exposure is terminated and nutritional support is provided.",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "adenosine triphosphate (ATP)",
                    "correct": true
                  },
                  {
                    "text": "glycogen stores",
                    "correct": false
                  },
                  {
                    "text": "intracellular calcium",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "Na+/K+-ATPase exchange pump",
                    "correct": true
                  },
                  {
                    "text": "calcium efflux channel",
                    "correct": false
                  },
                  {
                    "text": "aquaporin water channel",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "triglycerides (fatty liver / steatosis)",
                    "correct": true
                  },
                  {
                    "text": "insoluble coal dust (anthracosis)",
                    "correct": false
                  },
                  {
                    "text": "tau protein tangles",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "reversible",
                    "correct": true
                  },
                  {
                    "text": "irreversible (necrotic)",
                    "correct": false
                  },
                  {
                    "text": "malignant neoplastic",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "The nurse correlates the client's cellular mechanisms with her reversible clinical state.",
          "explanation": "Cellular volume regulation depends on three components: the plasma membrane, the Na+/K+-ATPase exchange pump, and an adequate supply of ATP. Alcohol metabolism produces toxic acetaldehyde and increases the NADH/NAD+ ratio, inhibiting mitochondrial ATP synthesis. Without ATP, the Na+/K+ pump fails; sodium ions accumulate inside the cell, creating an osmotic gradient that pulls water into the cytoplasm (hydropic swelling). At the same time, impaired fatty acid oxidation leads to triglyceride accumulation (steatosis). Because plasma membrane and nuclear structures remain intact, this represents reversible cellular injury. If the toxic insult ceases and cellular ATP production recovers, the pump resumes function, excess water is extruded, lipid droplets are metabolized, and hepatocyte architecture returns to normal."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Pathology",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Serum Chemistry & Hepatic Enzymes:</b><br>• AST (Aspartate Aminotransferase): 284 U/L (Reference: 10–40 U/L)<br>• ALT (Alanine Aminotransferase): 142 U/L (Reference: 7–56 U/L) [AST:ALT ratio = 2.0]<br>• Total Bilirubin: 3.8 mg/dL (Reference: 0.2–1.2 mg/dL)<br>• Direct Bilirubin: 2.4 mg/dL (Reference: 0.0–0.3 mg/dL)<br>• Serum Albumin: 2.7 g/dL (Reference: 3.5–5.0 g/dL)<br>• Serum Lactic Acid: 2.4 mmol/L (Reference: 0.5–2.0 mmol/L)<br>• Serum Sodium: 132 mEq/L (Reference: 135–145 mEq/L)<br>• Blood Alcohol Concentration: 85 mg/dL</p><p style=\"margin-top:10px;\"><b>Liver Core Biopsy & Electron Microscopy:</b><br>Biopsy demonstrates diffuse macrovesicular and microvesicular hepatic steatosis with lipid droplets compressing hepatocyte nuclei. Pronounced hydropic swelling (ballooning degeneration) is evident throughout centrilobular zones. Electron microscopy reveals dilated cisternae of the endoplasmic reticulum with detached ribosomes, swollen mitochondria, and plasma membrane surface blebs. Nuclear chromatin is preserved without fragmentation, and the basal lamina is intact. Upregulated ubiquitin-proteasome intermediates and chaperone stress proteins are detected.</p></div>"
            }
          ]
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "The nurse is planning care for Elena to support cellular recovery and prevent progression to irreversible hepatocellular necrosis. Which of the following nursing interventions should the nurse include in the plan of care? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Implement a standardized alcohol withdrawal protocol with frequent monitoring of withdrawal symptoms and vital signs",
              "correct": true
            },
            {
              "text": "Administer prescribed intravenous thiamine (vitamin B1) and high-potency multivitamins before initiating intravenous dextrose infusions",
              "correct": true
            },
            {
              "text": "Collaborate with the registered dietitian to provide high-calorie, balanced protein nutrition to support cellular repair and apolipoprotein synthesis",
              "correct": true
            },
            {
              "text": "Monitor serial liver enzymes (AST, ALT), total bilirubin, and coagulation studies (INR/PT) to assess hepatocellular recovery",
              "correct": true
            },
            {
              "text": "Administer acetaminophen 1000 mg orally every 6 hours around the clock for right upper quadrant discomfort",
              "correct": false
            },
            {
              "text": "Prepare the client for an urgent surgical wedge resection of the enlarged liver lobes",
              "correct": false
            }
          ],
          "preamble": "The nurse develops the client's nursing plan of care focused on cellular recovery, nutritional replenishment, and safe detoxification.",
          "explanation": "Nursing management of reversible toxic and nutritional cell injury centers on removing the injurious agent, restoring metabolic substrates, and monitoring for complications: (1) Protocol-driven withdrawal monitoring detects early autonomic hyperactivity and prevents withdrawal delirium; (2) Administering prescribed IV thiamine prior to glucose prevents acute Wernicke encephalopathy and provides essential coenzymes for aerobic ATP generation; (3) Collaborating on nutritional repletion supplies amino acids essential for protein synthesis (such as apolipoproteins needed to export accumulated lipids out of hepatocytes); (4) Serial liver enzymes and coagulation profiles evaluate whether cell membranes are stabilizing and liver synthetic function is returning. In contrast, acetaminophen is metabolized by the liver into the hepatotoxic intermediate NAPQI; in the setting of glutathione depletion from chronic alcohol use, standard doses can precipitate massive, irreversible hepatic necrosis. Surgery is contraindicated for diffuse, reversible metabolic liver injury."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Pathology",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Serum Chemistry & Hepatic Enzymes:</b><br>• AST (Aspartate Aminotransferase): 284 U/L (Reference: 10–40 U/L)<br>• ALT (Alanine Aminotransferase): 142 U/L (Reference: 7–56 U/L) [AST:ALT ratio = 2.0]<br>• Total Bilirubin: 3.8 mg/dL (Reference: 0.2–1.2 mg/dL)<br>• Direct Bilirubin: 2.4 mg/dL (Reference: 0.0–0.3 mg/dL)<br>• Serum Albumin: 2.7 g/dL (Reference: 3.5–5.0 g/dL)<br>• Serum Lactic Acid: 2.4 mmol/L (Reference: 0.5–2.0 mmol/L)<br>• Serum Sodium: 132 mEq/L (Reference: 135–145 mEq/L)<br>• Blood Alcohol Concentration: 85 mg/dL</p><p style=\"margin-top:10px;\"><b>Liver Core Biopsy & Electron Microscopy:</b><br>Biopsy demonstrates diffuse macrovesicular and microvesicular hepatic steatosis with lipid droplets compressing hepatocyte nuclei. Pronounced hydropic swelling (ballooning degeneration) is evident throughout centrilobular zones. Electron microscopy reveals dilated cisternae of the endoplasmic reticulum with detached ribosomes, swollen mitochondria, and plasma membrane surface blebs. Nuclear chromatin is preserved without fragmentation, and the basal lamina is intact. Upregulated ubiquitin-proteasome intermediates and chaperone stress proteins are detected.</p></div>"
            }
          ]
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "The nurse is prioritizing nursing actions during Elena's acute hospitalization. For each nursing action, click to specify whether it is <b>Indicated</b>, <b>Non-Essential</b>, or <b>Contraindicated</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Nursing Action",
            "columns": [
              "Indicated",
              "Non-Essential",
              "Contraindicated"
            ],
            "rows": [
              {
                "text": "Utilize the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) protocol to guide symptom-triggered benzodiazepine administration",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Administer prescribed intravenous 5% dextrose in water (D5W) before providing intravenous thiamine supplementation",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Encourage the client to drink over-the-counter herbal detox teas containing high concentrations of green tea extract and kava",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Obtain daily weights and measure abdominal girth at the level of the umbilicus each morning",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Place client in reverse Trendelenburg position continuously throughout the shift",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Elena is admitted to the medical step-down unit for detoxification, nutritional resuscitation, and close observation.",
          "explanation": "1. Indicated: CIWA-Ar protocol allows precise, objective evaluation of withdrawal severity and guides prompt benzodiazepine treatment to prevent seizures and delirium tremens.\n2. Contraindicated: Giving dextrose before thiamine depletes residual thiamine coenzymes required for carbohydrate metabolism, precipitating acute Wernicke-Korsakoff encephalopathy. Thiamine MUST be administered prior to dextrose.\n3. Contraindicated: Many unregulated herbal supplements (e.g., kava, high-dose green tea extract) have recognized hepatotoxic potential and can aggravate acute hepatocellular injury.\n4. Indicated: Daily weights and abdominal girth measurements provide sensitive assessment of fluid retention and early ascites.\n5. Non-Essential: Reverse Trendelenburg is unnecessary; standard comfortable semi-Fowler position supports diaphragm movement and liver perfusion."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Pathology",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Serum Chemistry & Hepatic Enzymes:</b><br>• AST (Aspartate Aminotransferase): 284 U/L (Reference: 10–40 U/L)<br>• ALT (Alanine Aminotransferase): 142 U/L (Reference: 7–56 U/L) [AST:ALT ratio = 2.0]<br>• Total Bilirubin: 3.8 mg/dL (Reference: 0.2–1.2 mg/dL)<br>• Direct Bilirubin: 2.4 mg/dL (Reference: 0.0–0.3 mg/dL)<br>• Serum Albumin: 2.7 g/dL (Reference: 3.5–5.0 g/dL)<br>• Serum Lactic Acid: 2.4 mmol/L (Reference: 0.5–2.0 mmol/L)<br>• Serum Sodium: 132 mEq/L (Reference: 135–145 mEq/L)<br>• Blood Alcohol Concentration: 85 mg/dL</p><p style=\"margin-top:10px;\"><b>Liver Core Biopsy & Electron Microscopy:</b><br>Biopsy demonstrates diffuse macrovesicular and microvesicular hepatic steatosis with lipid droplets compressing hepatocyte nuclei. Pronounced hydropic swelling (ballooning degeneration) is evident throughout centrilobular zones. Electron microscopy reveals dilated cisternae of the endoplasmic reticulum with detached ribosomes, swollen mitochondria, and plasma membrane surface blebs. Nuclear chromatin is preserved without fragmentation, and the basal lamina is intact. Upregulated ubiquitin-proteasome intermediates and chaperone stress proteins are detected.</p></div>"
            }
          ]
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The nurse evaluates Elena's response to therapy at her 4-week follow-up visit. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "At Elena's 4-week outpatient follow-up, repeat hepatic testing demonstrates that her AST has decreased from 284 U/L to 46 U/L and total bilirubin has normalized to 0.9 mg/dL. These improvements reflect the resolution of [[drop0]]. Because hydropic swelling and fatty liver represent [[drop1]] cellular injury, the restoration of cellular ATP production allowed the [[drop2]] to re-establish ionic gradients, successfully clearing excess intracellular water and accumulated lipid droplets without progression to irreversible necrotic cell death.",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "acute hepatocellular membrane leakage and cellular stress",
                    "correct": true
                  },
                  {
                    "text": "irreversible coagulative necrosis",
                    "correct": false
                  },
                  {
                    "text": "primary hepatocellular carcinoma",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "reversible",
                    "correct": true
                  },
                  {
                    "text": "irreversible",
                    "correct": false
                  },
                  {
                    "text": "anaplastic",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "plasma membrane Na+/K+-ATPase pump",
                    "correct": true
                  },
                  {
                    "text": "lysosomal acid hydrolases",
                    "correct": false
                  },
                  {
                    "text": "nuclear pore complex",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Elena returns to the clinic 4 weeks after hospital discharge. She reports complete alcohol abstinence, active participation in a recovery support program, and excellent appetite with balanced nutrition.",
          "explanation": "This case exemplifies the hallmark clinical course of reversible cellular injury. Once the chemical toxin (alcohol) is eliminated and nutritional cofactors are restored, mitochondrial aerobic respiration recovers, generating the ATP necessary to power the Na+/K+-ATPase pump. Intracellular sodium is actively pumped out against its concentration gradient, followed by water, resolving hydropic swelling. Concurrently, normal lipid synthesis and apolipoprotein transport mechanisms resume, mobilizing intrahepatic fat droplets. The dramatic drop in transaminases reflects restored plasma membrane integrity, confirming full recovery from reversible injury without progression to permanent necrosis or cirrhosis."
        },
        "leftContent": {
          "intro": "The medical-surgical nurse is admitting Elena Rostova, a 46-year-old female brought to the hospital by her sister due to worsening abdominal distension, profound fatigue, right upper quadrant tenderness, and jaundice.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0900:</span><span class=\"nurse-note-text\">Elena Rostova, a 46-year-old female, is admitted accompanied by her sister. Her sister reports that Elena has consumed 1 to 2 bottles of wine daily for the past 12 years, with intake escalating over the past 6 months following acute personal stress. For the past 4 weeks, her nutritional intake has been severely compromised, subsisting almost entirely on alcohol and processed crackers. Over the past 10 days, she developed progressive right upper quadrant heaviness, scleral icterus, dark amber urine, and generalized weakness. Medical history: no known history of viral hepatitis, biliary disease, or diabetes. Medications: none; denies taking acetaminophen, prescription medications, or intravenous drugs. Physical examination: alert but slow to respond; sclerae and sublingual mucosa visibly jaundiced; firm, smooth, tender hepatomegaly palpable 4 cm below the right costal margin. No asterixis or peripheral edema noted.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">4-Week Outpatient Follow-up:</span><span class=\"nurse-note-text\">Elena arrives accompanied by her sister. She has maintained total abstinence from alcohol for 30 consecutive days. Reports energy has returned, jaundice has completely cleared, and abdominal fullness has resolved. Repeat liver palpation reveals liver edge non-tender and barely palpable at the costal margin. AST is 46 U/L, ALT 38 U/L, total bilirubin 0.9 mg/dL, and serum albumin has increased to 3.8 g/dL. Repeat liver ultrasound shows marked reduction in hepatic echogenicity and normal liver span.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Pathology",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Serum Chemistry & Hepatic Enzymes:</b><br>• AST (Aspartate Aminotransferase): 284 U/L (Reference: 10–40 U/L)<br>• ALT (Alanine Aminotransferase): 142 U/L (Reference: 7–56 U/L) [AST:ALT ratio = 2.0]<br>• Total Bilirubin: 3.8 mg/dL (Reference: 0.2–1.2 mg/dL)<br>• Direct Bilirubin: 2.4 mg/dL (Reference: 0.0–0.3 mg/dL)<br>• Serum Albumin: 2.7 g/dL (Reference: 3.5–5.0 g/dL)<br>• Serum Lactic Acid: 2.4 mmol/L (Reference: 0.5–2.0 mmol/L)<br>• Serum Sodium: 132 mEq/L (Reference: 135–145 mEq/L)<br>• Blood Alcohol Concentration: 85 mg/dL</p><p style=\"margin-top:10px;\"><b>Liver Core Biopsy & Electron Microscopy:</b><br>Biopsy demonstrates diffuse macrovesicular and microvesicular hepatic steatosis with lipid droplets compressing hepatocyte nuclei. Pronounced hydropic swelling (ballooning degeneration) is evident throughout centrilobular zones. Electron microscopy reveals dilated cisternae of the endoplasmic reticulum with detached ribosomes, swollen mitochondria, and plasma membrane surface blebs. Nuclear chromatin is preserved without fragmentation, and the basal lamina is intact. Upregulated ubiquitin-proteasome intermediates and chaperone stress proteins are detected.</p></div>"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "case_1782360000003",
    "title": "NURS 1017 Unit 2 Case Study 3",
    "topic": "Unit 2 (Cellular Basis of Disease)",
    "unit": "Unit 2 (Cellular Basis of Disease)",
    "disorder": "Unit 2 (Cellular Basis of Disease)",
    "course": "NURS 1017",
    "description": "72-year-old male with diabetes and PAD presenting with ischemic dry gangrene progressing to liquefactive wet/gas gangrene with septic shock.",
    "screens": [
      {
        "step": 1,
        "question": {
          "stem": "The nurse conducts an immediate assessment of Walter's right lower extremity and systemic status. Which of the following findings indicate <b>severe irreversible cell death</b> and rapid progression from <b>dry gangrene to wet/gas gangrene</b>? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Blackened, dry, shriveled right second and third toes with an initial clear line of demarcation",
              "correct": true
            },
            {
              "text": "Rapid onset of foul-smelling, purulent, liquefactive drainage with tissue softening and extensive forefoot erythema",
              "correct": true
            },
            {
              "text": "Palpable subcutaneous crepitus (crackling gas bubbles) elicited across the dorsal forefoot",
              "correct": true
            },
            {
              "text": "Hypotension (BP 92/58 mmHg), tachycardia (118 bpm), high fever (38.9 °C), and elevated serum lactate (4.2 mmol/L)",
              "correct": true
            },
            {
              "text": "Transient toe paresthesia that completely resolves with limb elevation and warm blankets",
              "correct": false
            },
            {
              "text": "Strong, bounding palpable dorsalis pedis and posterior tibial arterial pulses bilaterally",
              "correct": false
            }
          ],
          "preamble": "",
          "explanation": "Irreversible cell death results in necrosis and gangrene: (1) Dry gangrene is a form of coagulative necrosis resulting from severe ischemia, characterized by black, dry, wrinkled, mummified tissue with a distinct line of demarcation; (2) Wet gangrene occurs when necrotic tissue is superinfected by bacteria, inducing liquefactive necrosis with tissue softening, foul-smelling purulent drainage, and rapidly spreading edema; (3) Gas gangrene results from anaerobic bacterial infection (e.g., Clostridium perfringens), which ferments carbohydrates and produces characteristic gas bubbles that feel like crackling crepitus under the skin; (4) Systemic signs of septic shock (fever, tachycardia, hypotension, lactic acidosis from tissue hypoperfusion) reflect bacterial toxin release and systemic inflammatory response. Gangrene does not resolve with elevation or warming, and peripheral pulses are absent due to severe arterial occlusive disease."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p>"
            },
            {
              "id": "vs_1",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Vital Sign</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Emergency Dept (1400)</th><th style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Reference Range</th></tr></thead><tbody><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Temperature</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">38.9 °C (tympanic)</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">36.5 – 37.5 °C</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Heart Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">118 bpm, sinus tachycardia</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">60 – 100 bpm</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Respiratory Rate</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">24 breaths/min</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">12 – 20 breaths/min</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Blood Pressure</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">92/58 mmHg (MAP 69 mmHg)</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">90/60 – 120/80 mmHg</td></tr><tr><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\"><b>Oxygen Saturation (SpO<sub>2</sub>)</b></td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">94% on room air</td><td style=\"border:1px solid #ccd8e0; padding:8px; background:white; color:#1e293b;\">95 – 100%</td></tr></tbody></table>"
            }
          ]
        }
      },
      {
        "step": 2,
        "question": {
          "stem": "The nurse reviews the four primary types of tissue necrosis and irreversible cell death. For each clinical presentation, click to match it with the correct <b>type of tissue necrosis</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Clinical & Pathological Scenario",
            "columns": [
              "Coagulative Necrosis",
              "Liquefactive Necrosis",
              "Fat Necrosis",
              "Caseous Necrosis"
            ],
            "rows": [
              {
                "text": "Myocardial infarction or arterial occlusion of an extremity where tissue architecture is preserved initially as 'ghost cells' lacking nuclei",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Brain infarction (stroke) or localized bacterial abscess where powerful hydrolytic enzymes dissolve dead cells into a liquid viscous mass",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              },
              {
                "text": "Acute pancreatitis or trauma to the breast where released lipases split triglycerides into fatty acids that combine with calcium to form chalky white soaps",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Pulmonary tuberculosis infection where necrotic debris forms friable, yellowish-white, cheese-like material without preservation of cellular outlines",
                "correctIndex": 3,
                "correctIndices": [
                  3
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Laboratory results and preliminary wound culture findings have returned (see Laboratory & Wound Assessment tab).",
          "explanation": "1. Coagulative necrosis: Most commonly caused by ischemia (except in the brain); protein denaturation predominates over enzymatic lysis, preserving basic structural cell outlines ('tombstone' or 'ghost' cells) for several days while nuclei undergo pyknosis, karyorrhexis, and karyolysis.\n2. Liquefactive necrosis: Enzymatic digestion predominates over protein denaturation; dead cells completely dissolve into a fluid viscous mass (pus/abscess), classic in bacterial/fungal infections and hypoxic death of central nervous system tissue (brain).\n3. Fat necrosis: Characterized by lipase-mediated destruction of adipose tissue (e.g., in acute pancreatitis or breast trauma); released free fatty acids bind with calcium ions (saponification) creating gross chalky-white deposits.\n4. Caseous necrosis: Distinctive feature of tuberculosis; tissue architecture is completely obliterated, leaving a friable, cheesy, amorphous granular debris surrounded by granulomatous inflammation."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Wound Assessment",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Stat Laboratory Results:</b><br>• WBC: 21,400 /mm<sup>3</sup> (Reference: 4,500–11,000) with 88% neutrophils, 10% band forms<br>• Hemoglobin: 10.8 g/dL (Reference: 13.5–17.5 g/dL)<br>• Serum Lactic Acid: 4.2 mmol/L (Reference: 0.5–2.0 mmol/L) [Tissue hypoperfusion]<br>• Serum Creatinine: 1.8 mg/dL (Baseline: 1.0 mg/dL) [Acute kidney injury]<br>• Blood Glucose: 312 mg/dL (Reference: 70–99 mg/dL)<br>• C-Reactive Protein (CRP): 145 mg/L (Reference: &lt; 5 mg/L)</p><p style=\"margin-top:10px;\"><b>Gram Stain & Anaerobic Wound Smear:</b><br>Numerous polymorphonuclear leukocytes; heavy growth of large Gram-positive, blunt-ended, spore-forming rods morphologically consistent with <i>Clostridium perfringens</i>, along with mixed Gram-negative enteric bacilli.</p><p style=\"margin-top:10px;\"><b>Right Foot Plain Radiograph (X-Ray):</b><br>Extensive soft tissue gas dissecting through the dorsal and plantar fascial compartments of the forefoot. Severe arterial calcification of dorsalis pedis and digital vessels. No bony osteomyelitis.</p></div>"
            }
          ]
        }
      },
      {
        "step": 3,
        "question": {
          "stem": "The nurse is analyzing the cellular death pathways contributing to Walter's presentation. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "The initial ischemic death of Walter's toes was dry gangrene, a variant of [[drop0]] necrosis. When anaerobic bacteria infected the dead tissue, it transformed into wet/gas gangrene characterized by [[drop1]] necrosis. Unlike necrosis, which is unprogrammed and triggers [[drop2]], apoptosis is programmed cell death where cells fragment into apoptotic bodies without eliciting inflammation. The intrinsic pathway of apoptosis is initiated in the mitochondria by release of [[drop3]] into the cytoplasm, regulated by p53 and the BCL-2 protein family.",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "coagulative",
                    "correct": true
                  },
                  {
                    "text": "liquefactive",
                    "correct": false
                  },
                  {
                    "text": "caseous",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "liquefactive",
                    "correct": true
                  },
                  {
                    "text": "fat",
                    "correct": false
                  },
                  {
                    "text": "caseous",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "an intense acute inflammatory response",
                    "correct": true
                  },
                  {
                    "text": "no inflammatory reaction",
                    "correct": false
                  },
                  {
                    "text": "immediate neoplastic transformation",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "cytochrome c",
                    "correct": true
                  },
                  {
                    "text": "lactic acid",
                    "correct": false
                  },
                  {
                    "text": "glycogen synthetase",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "The nurse contrasts the mechanisms of necrotic cell death with physiological apoptosis.",
          "explanation": "Necrosis is accidental, unprogrammed cell death resulting from severe exogenous injury (ischemia, toxins, severe trauma). In necrosis, ATP depletion causes cell and organelle swelling, plasma membrane disruption, release of intracellular macromolecules into the extracellular space, and inevitable acute inflammation. In dry gangrene, coagulative necrosis predominates; with secondary bacterial liquefaction, wet gangrene occurs. In gas gangrene, Clostridium toxins destroy adjacent viable tissue and produce gas bubbles. Conversely, apoptosis is programmed, energy-dependent cell suicide. The cell shrinks, chromatin condenses, and the cell buds into intact apoptotic bodies that are rapidly phagocytosed by macrophages without releasing cytosolic contents, producing NO inflammatory reaction. The intrinsic (mitochondrial) pathway is triggered by DNA damage, p53 activation, and intracellular calcium influx, causing BCL-2 effectors (BAX/BAK) to create mitochondrial pores that release cytochrome c, which activates executioner caspases."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Wound Assessment",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Stat Laboratory Results:</b><br>• WBC: 21,400 /mm<sup>3</sup> (Reference: 4,500–11,000) with 88% neutrophils, 10% band forms<br>• Hemoglobin: 10.8 g/dL (Reference: 13.5–17.5 g/dL)<br>• Serum Lactic Acid: 4.2 mmol/L (Reference: 0.5–2.0 mmol/L) [Tissue hypoperfusion]<br>• Serum Creatinine: 1.8 mg/dL (Baseline: 1.0 mg/dL) [Acute kidney injury]<br>• Blood Glucose: 312 mg/dL (Reference: 70–99 mg/dL)<br>• C-Reactive Protein (CRP): 145 mg/L (Reference: &lt; 5 mg/L)</p><p style=\"margin-top:10px;\"><b>Gram Stain & Anaerobic Wound Smear:</b><br>Numerous polymorphonuclear leukocytes; heavy growth of large Gram-positive, blunt-ended, spore-forming rods morphologically consistent with <i>Clostridium perfringens</i>, along with mixed Gram-negative enteric bacilli.</p><p style=\"margin-top:10px;\"><b>Right Foot Plain Radiograph (X-Ray):</b><br>Extensive soft tissue gas dissecting through the dorsal and plantar fascial compartments of the forefoot. Severe arterial calcification of dorsalis pedis and digital vessels. No bony osteomyelitis.</p></div>"
            }
          ]
        }
      },
      {
        "step": 4,
        "question": {
          "stem": "The nurse is generating solutions for Walter who is experiencing septic shock secondary to infected gangrenous tissue. Which of the following emergency nursing interventions should the nurse prioritize? <b>Select all that apply.</b>",
          "type": "select_all",
          "options": [
            {
              "text": "Administer prescribed rapid intravenous isotonic crystalloid resuscitation (e.g., 30 mL/kg of Lactated Ringer's) to restore circulating volume and perfusion pressure",
              "correct": true
            },
            {
              "text": "Administer prescribed broad-spectrum intravenous antimicrobial therapy covering anaerobes and gram-negative bacilli (e.g., piperacillin-tazobactam plus vancomycin)",
              "correct": true
            },
            {
              "text": "Prepare the client for emergent surgical debridement by verifying informed consent documentation and initiating preoperative checklists",
              "correct": true
            },
            {
              "text": "Insert an indwelling urinary catheter to monitor hourly urine output as an indicator of renal end-organ perfusion",
              "correct": true
            },
            {
              "text": "Apply tight compression dressings and warm heating pads directly to the necrotic right forefoot",
              "correct": false
            },
            {
              "text": "Submerge the gangrenous extremity in a warm water whirlpool bath to soften and soak necrotic crusts",
              "correct": false
            }
          ],
          "preamble": "The nurse plans emergency resuscitation, stabilization, and preoperative preparation for urgent operative debridement.",
          "explanation": "Gas/wet gangrene with septic shock is a surgical and medical emergency requiring immediate nursing actions: (1) Administering prescribed crystalloid fluid resuscitation restores effective circulating volume and combats hypoperfusion lactic acidosis; (2) Administering prescribed broad-spectrum intravenous antimicrobials stops bacterial proliferation and toxin production; (3) Preparing the client for surgical debridement/amputation ensures prompt source control, as antimicrobials cannot penetrate avascular dead tissue; and (4) Strict hourly urine output monitoring assesses renal perfusion. In contrast, tight compression bandages worsen tissue ischemia by further restricting arterial inflow, and heating pads cause thermal injury to neuropathic skin. Soaking in water macerates tissue, accelerates bacterial multiplication, and is strictly contraindicated."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Wound Assessment",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Stat Laboratory Results:</b><br>• WBC: 21,400 /mm<sup>3</sup> (Reference: 4,500–11,000) with 88% neutrophils, 10% band forms<br>• Hemoglobin: 10.8 g/dL (Reference: 13.5–17.5 g/dL)<br>• Serum Lactic Acid: 4.2 mmol/L (Reference: 0.5–2.0 mmol/L) [Tissue hypoperfusion]<br>• Serum Creatinine: 1.8 mg/dL (Baseline: 1.0 mg/dL) [Acute kidney injury]<br>• Blood Glucose: 312 mg/dL (Reference: 70–99 mg/dL)<br>• C-Reactive Protein (CRP): 145 mg/L (Reference: &lt; 5 mg/L)</p><p style=\"margin-top:10px;\"><b>Gram Stain & Anaerobic Wound Smear:</b><br>Numerous polymorphonuclear leukocytes; heavy growth of large Gram-positive, blunt-ended, spore-forming rods morphologically consistent with <i>Clostridium perfringens</i>, along with mixed Gram-negative enteric bacilli.</p><p style=\"margin-top:10px;\"><b>Right Foot Plain Radiograph (X-Ray):</b><br>Extensive soft tissue gas dissecting through the dorsal and plantar fascial compartments of the forefoot. Severe arterial calcification of dorsalis pedis and digital vessels. No bony osteomyelitis.</p></div>"
            }
          ]
        }
      },
      {
        "step": 5,
        "question": {
          "stem": "Walter underwent emergent right transmetatarsal amputation and extensive fascial debridement. The nurse is managing his postoperative critical care. For each nursing action, click to specify whether it is <b>Indicated</b>, <b>Non-Essential</b>, or <b>Contraindicated</b>.",
          "type": "matrix_mc",
          "matrix": {
            "firstColumnHeader": "Postoperative Nursing Action",
            "columns": [
              "Indicated",
              "Non-Essential",
              "Contraindicated"
            ],
            "rows": [
              {
                "text": "Administer supplemental oxygen to maintain SpO2 ≥ 96% to support tissue oxygenation and inhibit anaerobic Clostridial spore germination",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Monitor closely for manifestations of reperfusion injury (such as cardiac dysrhythmias or acute oliguria) following surgical revascularization",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Manage blood glucose levels using an intravenous regular insulin protocol targeting 140–180 mg/dL",
                "correctIndex": 0,
                "correctIndices": [
                  0
                ]
              },
              {
                "text": "Instruct the client to walk barefoot around the surgical intensive care unit to inspect his incision every 2 hours",
                "correctIndex": 2,
                "correctIndices": [
                  2
                ]
              },
              {
                "text": "Prepare the client for external beam radiation therapy to the surgical site",
                "correctIndex": 1,
                "correctIndices": [
                  1
                ]
              }
            ]
          },
          "options": [],
          "preamble": "Walter is transferred to the surgical ICU following emergent right transmetatarsal amputation and extensive surgical debridement.",
          "explanation": "1. Indicated: Supplemental oxygen supports mitochondrial oxidative phosphorylation in borderzone tissues and creates an oxygen-rich environment toxic to obligate anaerobic Clostridium species.\n2. Indicated: Reperfusion of chronically ischemic tissue delivers oxygen that generates toxic reactive oxygen species (free radicals) and high levels of extracellular calcium that rush into injured cells, triggering secondary cell death and cardiac arrhythmias.\n3. Indicated: Hyperglycemia impairs neutrophil phagocytosis and wound healing; maintaining glucose 140–180 mg/dL optimizes cellular defense without inducing hypoglycemia.\n4. Contraindicated: Weight-bearing and barefoot walking on a freshly debrided neuropathic diabetic amputation stump would cause immediate mechanical tissue disruption and catastrophic wound breakdown.\n5. Non-Essential: Radiation therapy is used for malignant neoplasms, not infectious ischemic gangrene."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1830 (Postoperative SICU):</span><span class=\"nurse-note-text\">Client transferred from operating room status-post right transmetatarsal amputation and extensive plantar fascial debridement. Clean surgical margins obtained. Incision left open with negative pressure wound therapy (wound VAC) applied at -125 mmHg continuous suction. Client receiving IV piperacillin-tazobactam and clindamycin. Blood pressure 114/72 mmHg on IV crystalloids, heart rate 88 bpm.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Wound Assessment",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Stat Laboratory Results:</b><br>• WBC: 21,400 /mm<sup>3</sup> (Reference: 4,500–11,000) with 88% neutrophils, 10% band forms<br>• Hemoglobin: 10.8 g/dL (Reference: 13.5–17.5 g/dL)<br>• Serum Lactic Acid: 4.2 mmol/L (Reference: 0.5–2.0 mmol/L) [Tissue hypoperfusion]<br>• Serum Creatinine: 1.8 mg/dL (Baseline: 1.0 mg/dL) [Acute kidney injury]<br>• Blood Glucose: 312 mg/dL (Reference: 70–99 mg/dL)<br>• C-Reactive Protein (CRP): 145 mg/L (Reference: &lt; 5 mg/L)</p><p style=\"margin-top:10px;\"><b>Gram Stain & Anaerobic Wound Smear:</b><br>Numerous polymorphonuclear leukocytes; heavy growth of large Gram-positive, blunt-ended, spore-forming rods morphologically consistent with <i>Clostridium perfringens</i>, along with mixed Gram-negative enteric bacilli.</p><p style=\"margin-top:10px;\"><b>Right Foot Plain Radiograph (X-Ray):</b><br>Extensive soft tissue gas dissecting through the dorsal and plantar fascial compartments of the forefoot. Severe arterial calcification of dorsalis pedis and digital vessels. No bony osteomyelitis.</p></div>"
            }
          ]
        }
      },
      {
        "step": 6,
        "question": {
          "stem": "The nurse is evaluating Walter's recovery on postoperative day 4. Complete the following sentence by choosing from the lists of options.",
          "type": "dropdown_cloze",
          "cloze": {
            "text": "Following surgical source control of Walter's infected gangrene, his WBC count normalized to 8,400 /mm3 and lactate decreased to 1.2 mmol/L, confirming eradication of [[drop0]]. Because necrotic cell death causes plasma membrane rupture and enzymatic leakage, it triggers [[drop1]], creating extensive collateral tissue destruction. In contrast, apoptosis eliminates unwanted or damaged cells through programmed cell condensation and fragmentation into apoptotic bodies, which are cleanly ingested by [[drop2]] without producing an inflammatory reaction.",
            "dropdowns": [
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "liquefactive and gas gangrene",
                    "correct": true
                  },
                  {
                    "text": "caseous granulomatous necrosis",
                    "correct": false
                  },
                  {
                    "text": "reversible hydropic swelling",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "acute inflammation",
                    "correct": true
                  },
                  {
                    "text": "no inflammatory reaction",
                    "correct": false
                  },
                  {
                    "text": "anaplastic transformation",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Select...",
                "options": [
                  {
                    "text": "tissue macrophages",
                    "correct": true
                  },
                  {
                    "text": "erythrocytes",
                    "correct": false
                  },
                  {
                    "text": "cardiac myocytes",
                    "correct": false
                  }
                ]
              }
            ]
          },
          "options": [],
          "preamble": "On postoperative day 4, Walter is hemodynamically stable, afebrile, and his amputation site demonstrates clean, beefy red granulation tissue without purulence or crepitus.",
          "explanation": "This case summarizes the critical contrast between necrosis and apoptosis. In necrosis (including coagulative necrosis of dry gangrene and liquefactive necrosis of wet/gas gangrene), external injury disrupts the plasma membrane, spilling intracellular proteins, enzymes, and nucleic acids into surrounding interstitial spaces, triggering intense acute inflammation and tissue damage. In contrast, apoptosis is an orderly, programmed process wherein cell suicide is executed cleanly: cell shrinkage, chromatin condensation, and fragmentation into membrane-bound apoptotic bodies that display 'eat-me' signals (like phosphatidylserine) for rapid recognition and engulfment by tissue macrophages, preventing any inflammatory damage to neighboring tissues."
        },
        "leftContent": {
          "intro": "The emergency department and vascular surgical nurse is conducting an urgent evaluation of Walter Henderson, a 72-year-old male with long-standing type 2 diabetes mellitus and advanced peripheral arterial disease (PAD), admitted with severe unremitting right foot pain and rapidly spreading tissue discoloration.",
          "tabs": [
            {
              "id": "nn_1",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1400:</span><span class=\"nurse-note-text\">Walter Henderson, a 72-year-old male, is admitted via EMS accompanied by his daughter. The daughter reports Walter has a 25-year history of poorly controlled type 2 diabetes mellitus, severe bilateral peripheral artery disease (PAD), and a remote coronary artery bypass graft. Over the past 3 weeks, he experienced severe, burning rest pain in his right forefoot that kept him awake at night, relieved only transiently by hanging his foot over the edge of the bed. Initially, his right second and third toes turned pale, cold, and numb, gradually becoming dark purple, and finally dry, shriveled, hard, and black with a sharp line of demarcation separating the dead tissue from healthy skin (dry gangrene). However, 48 hours ago, the black tissue softened, began weeping foul-smelling brown-yellow fluid, and the surrounding forefoot became swollen, red, and hot. On examination today, the nurse palpates distinct spongy, crackling sensations (subcutaneous crepitus) across the dorsum of the foot extending toward the ankle. Dorsalis pedis and posterior tibial pulses are non-palpable on the right (monophasic Doppler signal only). Client appears lethargic, diaphoretic, and shivering.</span></p><p class=\"nurse-note-row\"><span class=\"nurse-note-time\">Postoperative Day 4:</span><span class=\"nurse-note-text\">Walter is alert, oriented, and sitting up in bed eating breakfast. Vital signs: T 36.8 °C, P 76 bpm, RR 16 breaths/min, BP 122/74 mmHg, SpO2 97% on room air. The surgical wound VAC dressing was changed; wound bed shows clean, beefy red granulation tissue without purulent drainage, erythema, or crepitus. WBC is 8,400 /mm<sup>3</sup>, lactate 1.2 mmol/L, and serum creatinine has improved to 1.1 mg/dL. He will be transferred to step-down for continued wound therapy, physical therapy, and glycemic optimization.</span></p>"
            },
            {
              "id": "lab_1",
              "title": "Laboratory & Wound Assessment",
              "content": "<div style=\"padding:6px; font-size:13px; line-height:1.5;\"><p><b>Stat Laboratory Results:</b><br>• WBC: 21,400 /mm<sup>3</sup> (Reference: 4,500–11,000) with 88% neutrophils, 10% band forms<br>• Hemoglobin: 10.8 g/dL (Reference: 13.5–17.5 g/dL)<br>• Serum Lactic Acid: 4.2 mmol/L (Reference: 0.5–2.0 mmol/L) [Tissue hypoperfusion]<br>• Serum Creatinine: 1.8 mg/dL (Baseline: 1.0 mg/dL) [Acute kidney injury]<br>• Blood Glucose: 312 mg/dL (Reference: 70–99 mg/dL)<br>• C-Reactive Protein (CRP): 145 mg/L (Reference: &lt; 5 mg/L)</p><p style=\"margin-top:10px;\"><b>Gram Stain & Anaerobic Wound Smear:</b><br>Numerous polymorphonuclear leukocytes; heavy growth of large Gram-positive, blunt-ended, spore-forming rods morphologically consistent with <i>Clostridium perfringens</i>, along with mixed Gram-negative enteric bacilli.</p><p style=\"margin-top:10px;\"><b>Right Foot Plain Radiograph (X-Ray):</b><br>Extensive soft tissue gas dissecting through the dorsal and plantar fascial compartments of the forefoot. Severe arterial calcification of dorsalis pedis and digital vessels. No bony osteomyelitis.</p></div>"
            }
          ]
        }
      }
    ]
  }
];
