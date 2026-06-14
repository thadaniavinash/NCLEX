window.NCLEX_CASES = [
  {
    "id": "cardio-case-1",
    "title": "Case Study 1",
    "description": "",
    "screens": [
      {
        "step": 1,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "Which of the following findings require follow-up? <b>Select all that apply.</b>",
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
          "explanation": "Lung assessment (crackles, distress), vital signs (tachycardia, tachypnea, hypoxia), and heart sounds (risk of S3 due to heart failure secondary to MI and hypertension) all require immediate follow-up. Client orientation is normal and peripheral perfusion (pedal pulses/capillary refill) is not the primary acute concern compared to airway/breathing/cardiovascular status.",
          "preamble": ""
        }
      },
      {
        "step": 2,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "matrix_mc",
          "stem": "For each client finding, click to specify if the finding is consistent with the disease process of left-sided heart failure or right-sided heart failure.",
          "matrix": {
            "columns": [
              "Left-sided Heart Failure",
              "Right-sided Heart Failure"
            ],
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
            "firstColumnHeader": "Findings"
          },
          "explanation": "Left-sided heart failure causes pulmonary congestion (dyspnea, pink frothy sputum). Right-sided heart failure causes systemic venous congestion (jugular venous distention, dependent edema, ascites, hepatomegaly).",
          "preamble": ""
        }
      },
      {
        "step": 3,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "dropdown_cloze",
          "stem": "Complete the following sentence by choosing from the list of options.",
          "cloze": {
            "text": "The nurse should first place the client on [[drop0]] position, followed by [[drop1]], as ordered.",
            "dropdowns": [
              {
                "placeholder": "Choose...",
                "options": [
                  {
                    "text": "high-Fowler's",
                    "correct": true
                  },
                  {
                    "text": "supine",
                    "correct": false
                  },
                  {
                    "text": "prone",
                    "correct": false
                  },
                  {
                    "text": "Trendelenburg",
                    "correct": false
                  }
                ]
              },
              {
                "placeholder": "Choose...",
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
                ]
              }
            ]
          },
          "explanation": "Placing the client in high-Fowler's position reduces venous return (preload) and allows maximum lung expansion. Elevating oxygen delivery via a non-rebreather mask is the immediate next step to address severe hypoxia (SpO2 89%) before invasive measures like intubation.",
          "preamble": ""
        }
      },
      {
        "step": 4,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "matrix_mc",
          "stem": "For each potential diagnostic test, indicate whether the test is anticipated or not anticipated for the care of the client.",
          "matrix": {
            "columns": [
              "Anticipated",
              "Not Anticipated"
            ],
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
            "firstColumnHeader": "Findings"
          },
          "explanation": "Anticipated tests include Liver Function Tests (to evaluate hepatic congestion from right heart failure), Chest X-ray (pulmonary congestion/cardiomegaly), Echocardiogram (EF and structural dysfunction), CBC (general assessment), and ECG (ischemia/infarction/rhythm). Non-anticipated tests include EEG (for seizures/brain activity), Ventriculostomy (intracranial pressure monitoring), and Pulmonary Function Tests (not for acute cardiac dyspnea management).",
          "preamble": ""
        }
      },
      {
        "step": 5,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "multiple_choice",
          "stem": "After multiple diagnostic tests, it was confirmed that the client has left-sided heart failure that has progressed to the right side. Which of the following orders should the nurse question when caring for this client? Select one:",
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
          "explanation": "Epinephrine is a potent beta-1 and alpha-1 agonist that increases heart rate, cardiac workload, and myocardial oxygen demand, which can exacerbate heart failure and induce myocardial ischemia. Ramipril (ACE inhibitor) and Nitroglycerin (vasodilator) are standard treatments to reduce afterload and preload, and Metoprolol (beta-blocker) is part of long-term therapy once stabilized.",
          "preamble": ""
        }
      },
      {
        "step": 6,
        "leftContent": {
          "intro": "The nurse is caring for a 72-year-old male client in the emergency department (ED).",
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
          ]
        },
        "question": {
          "type": "select_n",
          "limit": 3,
          "stem": "Upon discharge, the nurse is educating the client on appropriate lifestyle modifications. Select the 3 statements by the nurse that are not appropriate to educate the client.",
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
          "explanation": "1. Gaining 0.5 lbs overnight is normal fluctuation; patients are taught to report 2-3 lbs in 24 hours or 5 lbs in a week. 2. Patients must stop smoking entirely, not limit to 1 cigarette. 3. Heart failure patients require fluid restriction, not increased fluids.",
          "preamble": ""
        }
      }
    ],
    "disorder": "Cardiovascular Disorders"
  },
  {
    "id": "case_1780489713691",
    "title": "Case Study 2",
    "description": "Endocrine Disorders",
    "screens": [
      {
        "step": 1,
        "leftContent": {
          "intro": "The nurse is caring for a 20-year-old female client.",
          "tabs": [
            {
              "id": "tab_1780489740867",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "Select the 6 client findings that require <b>immediate</b> follow-up.",
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
          "explanation": "This client with a long-standing history of symptomatic hyperglycemia (i.e., polydipsia, polyuria) now has findings of upper respiratory infection, hypovolemia, and a potential acute abdominal condition. Initial assessment of a client involves identifying indicators of life-threatening conditions. For this client, the following findings are the priority for follow-up: Decreased level of consciousness (e.g., drowsiness, disorientation) places the client at increased risk for injury and aspiration and may indicate impaired brain perfusion. This may be due to hypotension or hyperglycemia-induced cerebral edema. Tachycardia occurs to compensate for hypotension or can be the cause of hypotension and requires prompt attention to prevent cardiovascular collapse. Tachypnea is concerning, particularly when associated with rapid, deep respirations, because it may indicate a compensatory response to an underlying metabolic\nacidosis (e.g., ketoacidosis, hypotension-induced lactic acidosis). Hypotension causes impaired organ perfusion that could be life threatening without immediate intervention. Severe hyperglycemia may indicate diabetic ketoacidosis\n(DKA), a life-threatening complication of diabetes mellitus. In addition, hyperglycemia has a diuretic effect leading to\nfluid loss that worsens cardiovascular compromise. Delayed menstruation (e.g., time since last menstruation\nexceeds typical cycle length) could indicate that the client is pregnant, which presents a risk for pregnancy-related\ncomplications (ruptured ectopic pregnancy) and affects care provided to the client (e.g., avoid x-rays and teratogenic\nmedications). (Incorrect) Sore throat and nasal congestion are common findings associated with upper respiratory infections. These common infections could be a precipitating factor for DKA. These findings would not be a priority over those related to more life-threatening conditions because, other than the symptomatic care, there is no curative treatment for common upper respiratory infections. (Incorrect) Abdominal pain is an abnormal finding that requires\nfollow-up after the client is hemodynamically stable. Abdominal rigidity and rebound tenderness are absent in this client, which is reassuring that severe abdominal conditions related to peritoneal irritation are not likely at this time.\nEducational objective: The nurse should immediately follow up on findings of decreased level of consciousness, tachycardia, tachypnea, hypotension, and severe hyperglycemia due to their association with life-threatening conditions, as well as prioritize assessments that rule out other life-threatening complications (e.g., pregnancy status).\n\n",
          "limit": 6,
          "highlightText": "0845: The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced {sore throat and nasal congestion for the past week}. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. {Pregnancy status is unknown|correct}. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client {appears drowsy and is oriented to person and time only|correct}. {The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal}. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), {P 128|correct}, {RR 30|correct}, and {BP 88/60 mm Hg}. {Finger-stick blood glucose level is 33.3 mmol/L|correct}.",
          "maxCorrectSelections": null,
          "preamble": ""
        }
      },
      {
        "step": 2,
        "leftContent": {
          "intro": "The nurse is caring for a 20-year-old female client.",
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ]
        },
        "question": {
          "type": "matrix_mr",
          "stem": "For each client finding below, click to specify if the finding is consistent with the disease process of diabetic ketoacidosis, ruptured appendix, or ruptured ectopic pregnancy. Each finding may support more than one disease process.",
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
          "explanation": "Diabetic ketoacidosis (DKA) is a complication of diabetes mellitus that results from lack of insulin. Insulin is required to transport glucose into cells for energy, which means that lack of insulin leads to intracellular starvation despite the high level of glucose circulating in the blood (hyperglycemia). Physiologic responses to hyperglycemia include osmotic diuresis (polyuria) for reduction of blood glucose levels and breakdown of fat into acidic ketone bodies for energy. This leads to states of dehydration (as evidenced by tachycardia), electrolyte imbalance, and metabolic acidosis. Ketoacidosis leads to tachypnea and deep respirations (Kussmaul respirations), as well as abdominal pain and vomiting. Appendicitis is an inflammation of the appendix often resulting from obstruction by fecal matter. Appendiceal obstruction traps colonic fluid and mucus, causing increased intraluminal pressure and inflammation. This impairs perfusion of the appendix, resulting in swelling and ischemia. Clinical manifestations include fever, abdominal pain, rebound abdominal tenderness, tachycardia, nausea, and vomiting. Abdominal pain usually\nbegins near the umbilicus and migrates to the right lower quadrant (e.g., McBurney point). Tachypnea, as well as a\ncompensatory response, can be present, especially if there is a ruptured appendix or evidence of sepsis causing lactic acidosis (metabolic acidosis). Ectopic pregnancy occurs when a fertilized egg implants and grows outside the uterus, often in a fallopian tube. If untreated, ectopic pregnancy can lead to rupture of the fallopian tube (i.e.,\ntubal rupture), resulting in life-threatening hemorrhage. Clinical manifestations include signs of hemorrhagic shock (e.g., hypotension, tachycardia, tachypnea), abdominal pain, referred shoulder pain related to intraabdominal bleeding, and other pregnancy-related symptoms (e.g., nausea, vomiting). Educational objective: Diabetic ketoacidosis, ruptured appendix, and ruptured ectopic pregnancy share some common findings, including abdominal\npain, tachycardia, tachypnea, and vomiting. Diabetic ketoacidosis can be differentiated from these by the presence of\nsevere hyperglycemia and polyuria.\n",
          "matrix": {
            "columns": [
              "Diabetic Ketoacidosis",
              "Ruptured Appendix",
              "Ruptured Ectopic Pregnancy"
            ],
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
            "firstColumnHeader": "Finding"
          },
          "preamble": ""
        }
      },
      {
        "step": 3,
        "leftContent": {
          "intro": "The nurse is caring for a client in the clinic...",
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">0845:</span><span class=\"nurse-note-text\">The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L.</span></p>"
            }
          ]
        },
        "question": {
          "type": "dyad",
          "stem": "Complete the following sentence by choosing from the lists of options.",
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
          "explanation": "The client's findings are most aligned with diabetic ketoacidosis (DKA). When there is a lack of insulin to transport glucose into cells, glucose accumulates, creating an osmotic gradient that leads to diuresis (polyuria) and fluid loss. If the hyperglycemia persists, the process continues, and the fluid volume deficit decreases cardiac output and perfusion to vital organs (hypotension). The heart rate increases (tachycardia) to compensate for the decrease in cardiac output. Without immediate treatment, compensatory mechanisms eventually fail, and the client is at risk for developing life-threatening hypovolemic shock. (Incorrect) Based on the date of last menstrual period, the client\ncould be pregnant and experiencing a ruptured ectopic pregnancy. Ectopic pregnancy and rupture are associated with abdominal pain that varies in location and intensity; however, the client is not experiencing other findings related to ectopic pregnancy (e.g., abdominal rigidity, vaginal bleeding). Without treatment, ruptured ectopic pregnancy can lead to intrabdominal hemorrhage and hypovolemic shock. (Incorrect) Peritonitis and sepsis are associated with abdominal pain. However, appendiceal rupture typically also involves abdominal rigidity and guarding due to peritonitis, the inflammatory response that occurs when appendiceal contents (i.e., fecal matter) enter the peritoneal space. Educational objective: Diabetic ketoacidosis is associated with fluid volume deficit, which can lead to hypovolemic shock when untreated. Findings of hypovolemia and impending hypovolemic shock include\nhypotension and tachycardia that occur as the body compensates for decreased cardiac output.",
          "cloze": {
            "text": "Based on the clinical findings, the client is most at risk of [[drop0]] as evidenced by the client's [[drop1]].",
            "dropdowns": [
              {
                "placeholder": "Select...",
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
                ]
              },
              {
                "placeholder": "Select...",
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
                ]
              }
            ]
          },
          "preamble": ""
        }
      },
      {
        "step": 4,
        "leftContent": {
          "intro": "The nurse is caring for a client in the clinic...",
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
          ]
        },
        "question": {
          "type": "matrix_mc",
          "stem": "For each potential intervention, click to specify whether the intervention is expected or unexpected for the client at this time.",
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
          "explanation": "Management of diabetic ketoacidosis (DKA) initially focuses on IV fluid resuscitation to reverse hypovolemia and then correction of hyperglycemia, electrolyte abnormalities, and acid-base imbalance. Expected prescriptions include:\nContinuous insulin IV infusion to correct hyperglycemia. IV insulin has a more rapid onset of action than\nsubcutaneous insulin, which allows faster and more precise management of the blood glucose level. Continuous cardiac monitoring to detect dysrhythmias related to metabolic acidosis or electrolyte abnormalities. Frequent monitoring of electrolyte levels and replacement of electrolytes as needed to help prevent dysrhythmias.\nIsotonic IV fluid (e.g., 0.9% sodium chloride) to replace fluid losses. Hourly finger-stick blood glucose level checks to\nmonitor for treatment effectiveness and detect any hypoglycemia related to the insulin infusion. Strict intake and output monitoring to evaluate the effectiveness of fluid resuscitation and to monitor for signs of acute kidney injury.\nA prescription of 5% dextrose in 0.9% sodium chloride, a hypertonic solution, would be unexpected because it would\nworsen fluid loss through osmotic diuresis and further increase blood glucose level. This solution is typically administered when ketones are still present in the body but glucose is lower due to insulin administration. In this situation, continuous insulin infusion is needed to clear the ketones (acidosis) from the body, so a dextrose-containing solution is added to prevent hypoglycemia. Sodium polystyrene sulfonate, a potassium-binding resin,\nwould be unexpected for a client with DKA because it may contribute to hypokalemia. Even though serum potassium is elevated in this client at this time, the total body potassium is usually lower due to increased urinary losses. Hypokalemia may develop after insulin administration due to the shift of potassium from the extracellular to intracellular space. Educational objective: Management of diabetic ketoacidosis (DKA) focuses on IV fluid\nresuscitation and correction of hyperglycemia, electrolytes abnormalities, and acid-base imbalance. In addition to\nadministration of isotonic IV fluid, interventions include cardiac monitoring, insulin IV infusion, and frequent monitoring of blood glucose level, electrolytes, and intake/output.\n",
          "matrix": {
            "columns": [
              "Expected",
              "Unexpected"
            ],
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
            "firstColumnHeader": "Findings"
          },
          "preamble": ""
        }
      },
      {
        "step": 5,
        "leftContent": {
          "intro": "The nurse is caring for a client in the clinic...",
          "tabs": [
            {
              "id": "hp",
              "title": "Nurses's Notes",
              "content": "0845: The parent brought the client to the hospital after finding the client in the bathroom vomiting and unable to stand without assistance. The client states that she has experienced sore throat and nasal congestion for the past week. She reports 4 episodes of emesis during the past 24 hours and abdominal pain that is diffuse, constant, non-radiating, and rated 3 on a scale of 0-10. The client also reports polydipsia and polyuria over the past 2 months. The last menstrual period ended approximately 6 weeks ago with no abnormalities. Pregnancy status is unknown. The client is taking no medications, and she reports no smoking, alcohol, or recreational drug use. Family history includes hypertension and diabetes mellitus. The client appears drowsy and is oriented to person and time only. The abdomen is soft without guarding, rigidity, or rebound tenderness, and bowel sounds are normal. No blood is present in emesis. Respirations are rapid and deep. Breath sounds are clear. Vital signs are T 37.1° C), P 128, RR 30, and BP 88/60 mm Hg. Finger-stick blood glucose level is 33.3 mmol/L."
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
          ]
        },
        "question": {
          "type": "highlight",
          "stem": "Click to highlight the prescription that the nurse should perform first.",
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
          "explanation": "The priority intervention for diabetic ketoacidosis management is fluid resuscitation with isotonic IV fluid, typically with a largevolume 0.9% sodium chloride IV bolus. Fluid resuscitation prevents hypovolemic shock and helps normalize glucose and electrolyte levels via hemodilution. (Incorrect) It is essential to frequently monitor blood glucose\nlevels to assess treatment effectiveness and check for hypoglycemia. However, a blood glucose level had recently been obtained for this client. (Incorrect) Continuous infusion of isotonic IV fluid (e.g., 0.9% sodium chloride 125 mL/hr) is appropriate, but the IV fluid bolus should be infused first because rapid infusion of a large volume of isotonic IV fluid more quickly corrects hypovolemia. (Incorrect) The nurse should prioritize administration of regular insulin IV continuous infusion to correct hyperglycemia, but the first priority is prevention of life-threatening hypovolemic shock\nwith fluid resuscitation. (Incorrect) Maintaining NPO status may be appropriate for a client with a decreased level of consciousness to help prevent aspiration secondary to vomiting while the blood glucose level is being stabilized. However, this can be implemented after fluid resuscitation is initiated. (Incorrect) After blood glucose is decreased to an acceptable range, continuous infusion of isotonic IV fluid is replaced with a continuous infusion of glucose-containing IV solution (5% dextrose in 0.45% sodium chloride) to prevent hypoglycemia and cerebral edema related to a rapidly decreased serum osmolality. If hypoglycemia occurs, 50% dextrose solution IV can be administered PRN to rapidly increase the blood glucose level. Educational objective: The priority intervention for DKA is fluid resuscitation to prevent life-threatening hypovolemic shock and help normalize serum glucose and electrolyte levels.",
          "highlightText": "0905:\n - {Monitor blood glucose level every hour}\n - {Initiate 0.9% sodium chloride 125 mL/hr IV}\n - {Administer regular insulin IV continuous infusion}\n - {Maintain NPO status except for oral medications}\n - {Administer 0.9% sodium chloride 1000 mL IV bolus|correct}\n - {Initiate 50% dextrose solution IV PRN for hypoglycemia}"
        }
      },
      {
        "step": 6,
        "leftContent": {
          "intro": "The nurse is caring for a client in the clinic...",
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
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "The client is preparing for discharge after receiving successful treatment of diabetic ketoacidosis and a new diagnosis of type 1 diabetes mellitus. The nurse provides teaching about managing diabetes mellitus during an acute illness. Which of the following statements by the client indicate that the teaching has been effective? <b>Select all that apply.</b>",
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
          "explanation": "When a client with diabetes mellitus experiences an infection or another illness, the release of stress hormones can cause increased insulin resistance, which increases the blood glucose level and leads the body to break down fat for energy. Ketones are produced when fat is broken down, which can lead to diabetic ketoacidosis (DKA). Interventions for managing diabetes mellitus and preventing DKA during an illness include: Monitoring the urine for ketones if blood glucose levels are persistently elevated (&gt;13.3 mmol/L) to detect impending DKA (Option 1). Increasing fluid intake to help clear ketones from the system and prevent dehydration during illness. (Option 2) Checking blood glucose levels more frequently (e.g., every 4 hr) to monitor for hyperglycemia. (Option 4) Consuming beverages that contain glucose and replacing electrolytes if nausea and vomiting are present Notifying the health care provider of persistently elevated blood glucose levels, ketones in the urine, high fever, nausea, vomiting, or diarrhea. (Options 3 and 5) Clients with type 1 diabetes mellitus should not discontinue insulin use or reduce food intake during an illness. Unlike clients with type 2 diabetes mellitus, clients with type 1 diabetes produce no insulin, so not taking insulin will precipitate DKA. The client may require more insulin than usual due to the effects of stress hormones, and reduced food intake\ncontributes to the stress response. Educational objective: Infection or another illness in a client with diabetes mellitus can lead to diabetic ketoacidosis (DKA). During an illness, clients with diabetes mellitus should frequently monitor for elevated blood glucose levels and ketones in urine, increase fluid intake, ensure adequate intake of carbohydrates and electrolytes, and contact the health care provider if signs of DKA occur.\n",
          "preamble": ""
        }
      }
    ],
    "disorder": "Endocrine Disorders"
  },
  {
    "id": "case_1780591712513",
    "title": "University of Maryland - CS1",
    "description": "Maryland Next Gen NCLEX Test Bank Project September 1, 2022; Authors: Angela Davis, RN, MS, CM/DN Morgan State University",
    "screens": [
      {
        "step": 1,
        "leftContent": {
          "intro": "<p class=\"MsoNormal\"><a name=\"_Hlk106875135\"><span lang=\"EN-US\">The nurse cares for\na 23-year-old male in the Emergency Department who is experiencing acute onset\nof shortness of breath</span></a><span lang=\"EN-US\">.<o:p></o:p></span></p>",
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
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "Which findings require <b>immediate</b> follow-up. <b>Select all that apply.</b>",
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
          "explanation": "The nurse should recognize pertinent objective data (tachypnea, cough, wheezing, tripod position, and speaking in short phrases) and subjective data (shortness of breath and tightness in the chest) indicate respiratory distress associated with bronchoconstriction of the airways. The clients blood pressure and tenderness of chest wall do not require immediate follow-up.",
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
          "bowtieLeftPlaceholder": "Action to Take",
          "bowtieCenterPlaceholder": "Condition Most Likely Experiencing",
          "bowtieRightPlaceholder": "Parameter to Monitor",
          "bowtieCol1Header": "Actions to Take",
          "bowtieCol2Header": "Potential Conditions",
          "bowtieCol3Header": "Parameters to Monitor",
          "preamble": "The nurse assesses the client on admission."
        }
      },
      {
        "step": 2,
        "leftContent": {
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath.",
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></div>"
            },
            {
              "id": "tab_1780591977805",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1115</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">36.5 C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">98</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">26</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">B/P</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">114/78 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Pulse oximetry</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">95% (on room air)</td></tr></tbody></table><p><br></p><br><br>"
            }
          ]
        },
        "question": {
          "type": "matrix_mc",
          "stem": "For each potential finding, click to specify if the finding is a risk factor or not a risk factor for asthma.",
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
          "explanation": "The nurse should identify risk factors for asthma. Risk factors for asthma include family history, allergies, use of medications such as NSAIDS, betablockers and aspirin. With asthma non-cardio selective beta-blockers block the effects of beta 2 (lung) receptors. This blocks the ability of airways to expand for easier breathing. Smoking cigarettes, exposure to second-hand smoke, viral infections, a history of GERD, and being overweight are also risk factors. Edema and history of diabetes are not risk factors for asthma.",
          "preamble": "",
          "matrix": {
            "firstColumnHeader": "Potential Findings",
            "columns": [
              "Risk Factor",
              "Not a Risk Factor"
            ],
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
            ]
          }
        }
      },
      {
        "step": 3,
        "leftContent": {
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath.",
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
              "content": "<br><table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1300</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hematocrit<br>38 - 50%</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">48%</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Hemoglobin<br>Female: 115 - 155 g/L<br>Male: 125 - 155 g/L °C</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">150 g/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>8 x 10<sup>9</sup>/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>4.0 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>138 mmol/L</td></tr></tbody></table><p><br></p><br>"
            },
            {
              "id": "tab_1780609656306",
              "title": "Diagnostic Reports",
              "content": "Chest-X Ray results show hyperinflation of lungs with flattened bases at the diaphragm."
            }
          ]
        },
        "question": {
          "type": "dyad",
          "stem": "Complete the following sentences by choosing from the lists of options.",
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
          "explanation": "The presenting assessment most suggests acute onset asthma evidenced by expiratory wheezing. Wheezing is a high-pitched whistling sound produced during breathing. It is a sign of bronchoconstriction, a narrowing of the airways of the lungs (bronchi) that impedes the flow of air to and from the lungs. Wheezing is often the first sign of asthma or an impending asthma attack.&nbsp;",
          "preamble": "The nurse has reviewed the laboratory and chest X-ray reports.&nbsp;",
          "cloze": {
            "text": "The nurse should recognize that the client is most likely experiencing [[drop0]] as most evidenced by the [[drop1]].",
            "dropdowns": [
              {
                "placeholder": "Select...",
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
                ]
              },
              {
                "placeholder": "Select...",
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
                ]
              }
            ]
          }
        }
      },
      {
        "step": 4,
        "leftContent": {
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath.",
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></div>"
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
          ]
        },
        "question": {
          "type": "select_all",
          "stem": "Which of the following interventions should the nurse anticipate including in the plan of care? <b>Select all that apply.</b>",
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
          "explanation": "Maintaining airway patency and preventing the occurrence of reversible complications are priorities in acute asthma care. The emergent plan of care involves giving short-acting Beta 2 agonist (Albuterol), cholinergic antagonist (Ipratropium), oxygen, and corticosteroids to reduce inflammation in the lungs. The nurse should raise the head of the bed to decrease the work of breathing and monitor the pulse oximeter readings. Beta-blockers, like labetalol, are not indicated because they block the effects of beta 2 (lung) receptors and the ability of airways to expand for easier breathing. NSAIDS and aspirin can induce bronchospasms. Tachypnea seen in asthma, increases insensible water loss from the lungs that can lead to dehydration. Increase work of breathing will decrease fluid intake by mouth. Oral fluids can be encouraged once breathing is no longer labored.",
          "preamble": "The client is diagnosed with onset acute asthma."
        }
      },
      {
        "step": 5,
        "leftContent": {
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath.",
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></div>"
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
          ]
        },
        "question": {
          "type": "matrix_mr",
          "stem": "For each action, click to specify if the nurse should implement the action immediately, within the next hour, or before the end of the shift.",
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
          "explanation": "When asthma is suspected, the emergent plan of care is giving short-acting Beta 2 agonist (Albuterol), cholinergic antagonist (Ipratropium), oxygen, and corticosteroids to reduce inflammation in the lungs. It is best to teach pursed lip breathing exercises when the patient is sitting upright and feeling relaxed. Pursed lip breathing is a simple technique for slowing down a person’s breathing and getting more air into their lungs. Ineffective inhaler use can lead to asthma exacerbation. Peak flow meters measure peak expiratory flow rate (PEFR), a small device used to monitor lung function. Clients should be instructed to perform three peak flow meter readings regularly at least 2 to 4 times daily, when asthma symptoms are decreased or not present. Once the client is stabilized the nurse can instruct the client how to use albuterol rescue inhalers appropriately.",
          "preamble": "The nurse reviews the physician’s orders and considers needed teaching.",
          "matrix": {
            "firstColumnHeader": "Nursing Interventions",
            "columns": [
              "Immediately",
              "Within the hour",
              "Before the end of the shift"
            ],
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
            ]
          }
        }
      },
      {
        "step": 6,
        "leftContent": {
          "intro": "The nurse cares for a 23-year-old male in the Emergency Department who is experiencing acute onset of shortness of breath.",
          "tabs": [
            {
              "id": "nn_1780591712513",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1100</span><span class=\"nurse-note-text\">Client reports shortness of breath and chest tightness that has progressively worsened for the past 2 to 3 days. He has a history of seasonal allergies, is a non-smoker, and lives at home with his mother who is a current smoker. Denies fever or vomiting. Describes feeling fatigued and has a dry cough at night.</span></p><div class=\"nurse-note-row\"><span class=\"nurse-note-time\">1115</span><span class=\"nurse-note-text\">Audible and expiratory wheezing auscultated throughout lung fields bilaterally. Increased respiratory rate noted, capillary refill &lt; 3 seconds, skin warm to touch. Chest wall is symmetrical with no deformity. Client sits upright and leans forward resting his hands on his knees in tripod position and speaks only a few words between breaths. Tenderness on palpation of chest wall. Trachea is midline with no deviation. Labs drawn. CXR ordered.</span></div>"
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
          ]
        },
        "question": {
          "type": "dyad",
          "stem": "Complete the following sentence by choosing from the list of options.&nbsp;",
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
          "explanation": "The client’s shortness of breath has resolved, and the oxygen level has increased. Since the symptoms improved with corticosteroids, short-acting beta 2 agonist (Albuterol), Ipratropium and oxygen treatment, the nurse should now prepare the client for discharge to home.",
          "preamble": "The nurse reassesses the client at 1330 after implementing the health care providers prescriptions.",
          "matrix": {
            "firstColumnHeader": "",
            "columns": [
              "",
              "",
              ""
            ],
            "rows": []
          },
          "cloze": {
            "text": "The nurse determines the client's status is[[drop0]]. The nurse should now[[drop1]].",
            "dropdowns": [
              {
                "placeholder": "Select...",
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
                ]
              },
              {
                "placeholder": "Select...",
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
                ]
              }
            ]
          }
        }
      }
    ],
    "disorder": "Respiratory Disorders"
  },
  {
    "id": "case_1781387466359",
    "title": "New Case Study",
    "description": "",
    "screens": [
      {
        "step": 1,
        "leftContent": {
          "intro": "The nurse is caring for a 68-year-old female adult admitted after 24 hours of vomiting and watery diarrhea. She reports dizziness when standing, thirst, weakness, and mild abdominal cramping. Her daughter states, “She seems more confused than usual.” Medical history includes type 2 diabetes mellitus, hypertension, and chronic kidney disease stage 3. Home medications include metformin, lisinopril, hydrochlorothiazide, and atorvastatin. She lives alone and has had limited oral intake since yesterday.",
          "tabs": [
            {
              "id": "nn_1781387466359",
              "title": "Nurses' Notes",
              "content": "<p class=\"nurse-note-row\"><span class=\"nurse-note-time\">1005:</span><span class=\"nurse-note-text\">Patient appears fatigued. Mucous membranes dry. Skin warm. Reports dizziness on standing. Denies chest pain. Mild generalized abdominal tenderness without guarding. Daughter reports new confusion. Last void was “early this morning.”</span></p>"
            },
            {
              "id": "tab_1781387807243",
              "title": "Vital Signs",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Time</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">1005</th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Temp</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">38.1 °C</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">HR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">116 beats/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">RR</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">22 breaths/min</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">BP</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">94/58 mm Hg</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Orthostatic BP</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Not attempted because client is dizzy when sitting upright</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">SpO<sub>2</sub></td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96% (on room air)</td></tr></tbody></table>"
            },
            {
              "id": "tab_1781388411984",
              "title": "Laboratory Results",
              "content": "<table class=\"nclex-editor-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\"><thead><tr><th placeholder=\"Header 1\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\">Laboratory Test and Reference Range</th><th placeholder=\"Header 2\" style=\"border:1px solid #ccd8e0; padding:8px; background:#025287; color:white; font-weight:600; text-align:left;\"></th></tr></thead><tbody><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Sodium, blood<br>136 - 146 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">132 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Potassium, blood<br>3.5 - 5.1 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">3.3 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Bicarbonate, blood<br>21 - 32 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">20 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Blood urea nitrogen (BUN)<br>2.1 - 8.0 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">12.5 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Chloride, blood<br>98 - 107 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">96 mmol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Creatinine, blood<br>Female: 22 - 75 micromol/L<br>Male: 49 - 93 micromole/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\"><br>168 micromol/L</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">Glucose, blood<br>Fasting: 4.0 - 6.0 mmol/L<br>Random: 4.0 - 11.0 mmol/L</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">14.8 mmol/L (random)</td></tr><tr><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">White blood cell (WBC) count, blood<br>3.5 - 10.5 x 10<sup>9</sup>/L&nbsp;</td><td placeholder=\"Cell\" style=\"border:1px solid #ccd8e0; padding:8px; min-width:80px; background:white; color:#1e293b;\">13.8 x 10<sup>9</sup>/L</td></tr></tbody></table><p><br></p>"
            }
          ]
        },
        "question": {
          "type": "multiple_choice",
          "stem": "Which statement best describes the priority pathophysiology concern in this case?",
          "options": [
            {
              "text": "The client has only subjective symptoms, so objective findings are not concerning.",
              "correct": false
            },
            {
              "text": "Vomiting and diarrhea can cause fluid volume deficit, electrolyte disturbance, and decreased tissue perfusion.",
              "correct": true
            },
            {
              "text": "Fever alone explains all findings, so no further assessment is required.",
              "correct": false
            },
            {
              "text": "Hyperglycemia is unrelated to acute illness and can be ignored until discharge.",
              "correct": false
            },
            {
              "text": "",
              "correct": false
            }
          ],
          "explanation": "Vomiting and diarrhea can produce fluid volume deficit, electrolyte losses, acid-base changes, reduced perfusion, dizziness, tachycardia, and acute kidney injury risk. Fever and hyperglycemia may contribute but do not explain the whole priority pattern.",
          "preamble": "The nurse has reviewed the recently received laboratory data."
        }
      }
    ],
    "disorder": "Blood Disorders"
  }
];
window.NCLEX_STANDALONE = [];
