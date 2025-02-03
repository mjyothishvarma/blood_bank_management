import React, { Component } from 'react';
import '../../styles/howtoDonBloodStyles/faq.css';

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedId: null, 
        };
    }

    toggleAccordion = (id) => {
        this.setState((prevState) => ({
            expandedId: prevState.expandedId === id ? null : id,
        }));
    };

    render() {
        return (
            <section className="faq-faq-section">
                <div className="faq-faq-container">
                    <div className="faq-faq-accordion">
                        {this.renderAccordionItem(
                            "1. What should I eat before blood donation?",
                            "Anything that you normally eat at home. Eating light snacks and having a soft drink before blood donation is sufficient.",
                            "faq-question1"
                        )}
                        {this.renderAccordionItem(
                            "2. How often can I donate Blood?",
                            "Wait at least three months after donation.",
                            "faq-question2"
                        )}
                        {this.renderAccordionItem(
                            "3. Are there any side effects of Blood donations?",
                            "There are no side effects of blood donation. Our blood bank staff ensures that your blood donation is a good experience to make you a regular blood donor.",
                            "faq-question3"
                        )}
                        {this.renderAccordionItem(
                            "4. I am taking antibiotics. Can I donate blood?",
                            "It depends on why you are taking the antibiotics and may also depend on doctor's counseling.",
                            "faq-question4"
                        )}
                        {this.renderAccordionItem(
                            "5. I had alcohol before going to donate blood. Is it Okay?",
                            "No. We do not take blood from anyone under the influence of alcohol. This is because being intoxicated can affect your ability to understand and answer the donor questionnaire and declaration.",
                            "faq-question5"
                        )}
                        {this.renderAccordionItem(
                            "6. How does age affect my ability to donate blood?",
                            "Minimum age for whole blood donation is 18 years in India. The maximum age for blood donation depends on the kind of donation.",
                            "faq-question6"
                        )}
                        {this.renderAccordionItem(
                            "7. Who can donate blood?",
                            "According to NCBI, donors should be between the ages of 18 and 65, weigh at least 45 kg, and not have donated blood within the previous 12 weeks.",
                            "faq-question7"
                        )}
                        {this.renderAccordionItem(
                            "8. What is the procedure for donating blood?",
                            "The entire procedure of blood donation takes about 15-20 minutes, but the actual blood donation is only 5 minutes.",
                            "faq-question8"
                        )}
                        {this.renderAccordionItem(
                            "9. How much blood is taken?",
                            "For a whole blood donation, approximately 0.5 L of blood is collected.",
                            "faq-question9"
                        )}
                        {this.renderAccordionItem(
                            "10. What types of tests are performed on donated blood?",
                            <>
                                <p>
                                    After blood is drawn, it is tested for ABO group (blood type) and Rh type (positive or negative), as well as for any unexpected red blood cell antibodies that may cause problems for the transfusion recipient. Blood is tested for:
                                </p>
                                <ul>
                                    <li>Hepatitis B virus</li>
                                    <li>Hepatitis C virus</li>
                                    <li>HIV-1 and HIV-2</li>
                                    <li>HTLV-I and HTLV-II</li>
                                    <li>Syphilis</li>
                                    <li>West Nile virus</li>
                                    <li>Trypanosoma cruzi, the infectious agent causing Chagas' disease</li>
                                    <li>Babesia - in states where testing is required by FDA guidance</li>
                                </ul>
                            </>
                            , "faq-question10"
                        )}
                        {this.renderAccordionItem(
                            "11. What is one unit of blood?",
                            "A unit of whole blood is about 517 milliliters and is roughly equivalent to one pint.",
                            "faq-question11"
                        )}
                        {this.renderAccordionItem(
                            "12. How much is the price of blood?",
                            "Packed Red Cells/Whole Blood - ₹1550 per unit",
                            "faq-question12"
                        )}
                        {this.renderAccordionItem(
                            "13. How can I buy blood?",
                            <>
                                <p>
                                    It is mandatory to get the Blood requisition form which has to be stamped by the blood bank of the hospital or if the blood bank is not available in the hospital, it should be stamped by the doctor treating the patient and the hospital along with the blood sample of the patient.
                                </p>
                                <p>
                                    The person collecting the blood must possess a valid Govt ID card and proof of relationship with the patient.
                                </p>
                            </>
                            , "faq-question13"
                        )}
                        {this.renderAccordionItem(
                            "14. If I have a cold or the flu, can I donate blood?",
                            "No, blood centers require that you be in good health (symptom-free) and feeling well.",
                            "faq-question14"
                        )}
                        {this.renderAccordionItem(
                            "15. Can I still donate if I have high blood pressure?",
                            "Yes, if your blood pressure falls within the limits set by NBTC regulations.",
                            "faq-question15"
                        )}
                        {this.renderAccordionItem(
                            "16. Where can I find the all eligibility criteria?",
                            "Click here to view all eligibility criteria.",
                            "faq-question16"
                        )}
                        {this.renderAccordionItem(
                            "17. Can I donate blood if I have a tattoo?",
                            "You should not donate blood if you have recently received a tattoo or body piercing for at least six months.",
                            "faq-question17"
                        )}
                        {this.renderAccordionItem(
                            "18. Can I donate blood if I have my period?",
                            "Yes, menstruating doesn't affect your ability to donate.",
                            "faq-question18"
                        )}
                        {this.renderAccordionItem(
                            "19. What to eat after donation?",
                            "After donating blood, prioritize foods rich in iron, vitamin C, and B vitamins to support your body's regeneration of red blood cells. Replenishing your body's fluid levels after donating blood is equally important.",
                            "faq-question19"
                        )}
                    </div>
                </div>
            </section>
        );
    }

    renderAccordionItem(question, answer, id) {
        const isExpanded = this.state.expandedId === id; 
        return (
            <div className={`faq-faq-item ${isExpanded ? 'active' : ''}`} id={id} key={id}>
                <a 
                    className="faq-faq-link" 
                    onClick={() => this.toggleAccordion(id)} 
                    href="#!"
                >
                    <p>{question}</p>
                    <i className={`faq-icon ion-md-${isExpanded ? 'remove' : 'add'}`}></i>
                </a>
                {isExpanded && ( 
                    <div className="faq-faq-answer">
                        {typeof answer === "string" ? <p>{answer}</p> : answer}
                    </div>
                )}
            </div>
        );
    }
}

export default Faq;
