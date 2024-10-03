import React, { useRef } from 'react'
import CountDown from './CountDown';

const RightContent = (props) => {

    const { dataQuiz } = props;

    const refDiv = useRef([]);


    const onTimeUp = () => {
        props.handleFinish();
    }

    const getClassQuestion = (question) => {
        if (question && question.answers.length > 0) {
            let check = question.answers.find(a => a.isSelected === true);
            if (check) {
                return "question selected";
            }
        }
        return 'question';
    }

    const handleClickQuestion = (question, index) => {
        props.setIndex(index)
        if (refDiv.current) {
            refDiv.current.forEach(item => {
                if (item && item.className === "question clicked") {
                    item.className = "question";
                }
            })
        }

        if (question && question.answers.length > 0) {
            let check = question.answers.find(a => a.isSelected === true);
            if (check) {
                return;
            }
        }
        refDiv.current[index].className = 'question clicked'
    }

    return (
        <>
            <div className='main-timer'>
                <CountDown
                    onTimeUp={onTimeUp}
                />
            </div>
            <div className='main-question'>
                {dataQuiz && dataQuiz.length > 0
                    && dataQuiz.map((item, index) => {

                        return (
                            <div
                                key={`question-abc-${index}`}
                                className={getClassQuestion(item)}
                                onClick={() => handleClickQuestion(item, index)}
                                ref={el => refDiv.current[index] = el}
                            >{index + 1}</div>
                        )

                    })
                }

            </div>
        </>
    )
}

export default RightContent