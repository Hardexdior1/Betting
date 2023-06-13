import React, { useRef } from "react";
import "./Bet.css";
import { useState } from "react";
// import Answer from "./Answer";
import Questions from "./QuestionAndAnswersData";

// won sope kin ma lo sun le wipe kin order rossey mo ni mo like champaighn emi omo ope o , mo sare fo wo mi shaye ..mefa lo le mr money oshey o emi omo ope o
// emiliano rora ko shama rora iwo ni ko ni coder mo dae mo rora as i dey para pass ur brother baraka de salah ile ofo chameleon moti gbe won de be
// ni money long cos i dun pashe na everybody wants to tear my shirt i just blow but omo me i know my set before dem use me i go use my sense , my sense omo
// oba lo pashe anita nita nita nita go down stairs , omo dudu omo pupa emi lon mafe range rover meji elo lomaje je je  asalam alaikun
// i get many many desciples mo taka oshidanu ...thank go i dun see d bug , i go continue my music later if i dun get bug
const Bet = () => {
  const [TotalBalance, setTotalBalance] = useState(20);
  const [inputValue, setInputValue] = useState(0);
  const [showBetInputAndNumberInput, setShowBetInputAndNumberInput] =
    useState(false);
  const [checkIfUserWin, setCheckIfUserWin] = useState("");
  const [userGuessedNumber, setUserGuessedNumber] = useState("");
  const [randomValue, setRandomValue] = useState("");
  const [showReBetButton, setShowReBetButton] = useState(false);
  //   staking number and input
  const StakeAmountInput = (event) => {
    const text = event.target.value;
    // console.log(text);
    setInputValue(text);
  };
  // change the text color if the user win to gree and change it to red if the user loose
  const changeColor = useRef();

  // IMPORT QUESTIONS AND ANSWERS
  const [questions, setQuestions] = useState(Questions);
  console.log(questions);
  // show benefit
  const [showBenefit, setShowBenefit] = useState(false);

  // instruction
  const [showInstruction, setShowInstruction] = useState(false);

  // show guess input
  const [showGuessInput, setShowGuessInput] = useState(true);

  const removeSTaking = () => {
    if (inputValue === "") {
      alert('please the input can"t be empty');
    } else if (inputValue > TotalBalance) {
      alert("sorry your Balance is not up to that");
    } else if (inputValue < 1) {
      alert('you can"t stake ' + "$" + inputValue);
    } else {
      // TotalBalance-inputValue
      setTotalBalance(TotalBalance - inputValue);
      setShowBetInputAndNumberInput(true);
    }
  };
  const guessedNumber = (event) => {
    const guessed = event.target.value;
    setUserGuessedNumber(guessed);
  };
  //   random Number

  // let a =Math.floor(Math.random()*5)+1

  const ranDom = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    console.log(randomNumber);

    if (
      userGuessedNumber === "" ||
      userGuessedNumber > 5 ||
      userGuessedNumber < 1
    ) {
      setShowInstruction(true);
    } else if (inputValue > 9 && randomNumber === userGuessedNumber) {
      console.log("you won");
      setTotalBalance(TotalBalance + inputValue * 3);
      setCheckIfUserWin("you win congrats your balance has been updated ");
      // changeColor.current.classList.contains('winningLooseMessage')
      changeColor.current.classList.remove("winningLooseMessage");
      changeColor.current.classList.add("winningMessage");
      setShowGuessInput(false);

      setRandomValue(randomNumber);
      setShowReBetButton(true);
    } else if (randomNumber === userGuessedNumber) {
      console.log("you won");
      setTotalBalance(TotalBalance + inputValue * 2);
      setCheckIfUserWin("you win congrats your balance has been updated ");
      // changeColor.current.classList.contains('winningLooseMessage')
      changeColor.current.classList.remove("winningLooseMessage");
      changeColor.current.classList.add("winningMessage");
      setShowGuessInput(false);

      setRandomValue(randomNumber);
      setShowReBetButton(true);
    } else if (randomNumber !== userGuessedNumber) {
      console.log("you loose");
      setCheckIfUserWin("sorry you loose and your money is gone ");
      setRandomValue(randomNumber);
      setShowReBetButton(true);
      changeColor.current.classList.remove("winningMessage");
      changeColor.current.classList.add("winningLooseMessage");
      setShowGuessInput(false);
    } else if (TotalBalance === 0) {
      alert("your balance is low ..use the offer to update your balance ");
    }
  };

  return (
    <div className="flex">
      <div className="wrap">
        {showInstruction ? (
          <div className="instructionDiv">
            <span>
              <strong>instruction......</strong>
            </span>
            <button
              onClick={() => {
                setShowInstruction(false);
              }}>
              ok
            </button>
            <li>make sure you input a number you want to guess </li>
            <li>
              make sure the number is not lesser than 1 and not greater than 5
              because the correct answer is within 1-5 so you can choose 1,2,3,4
              or 5{" "}
            </li>
          </div>
        ) : (
          ""
        )}

        <h4>Your balance is : ${TotalBalance} </h4>

        {inputValue > 9 ? (
          <h4>
            {" "}
            your staking price is : ${inputValue} to win ${inputValue * 3}
          </h4>
        ) : (
          <h4>
            {" "}
            your staking price is : ${inputValue} to win ${inputValue * 2}
          </h4>
        )}

        {showBetInputAndNumberInput ? (
          <div>
            <h4>You guess: {userGuessedNumber}</h4>
            <h4>Computer brings: {randomValue}</h4>
            <h4 ref={changeColor} className="winningMessage">
              {checkIfUserWin}
            </h4>
            {showGuessInput ? (
              <input
                placeholder="guess a number"
                type="number"
                onChange={guessedNumber}
              />
            ) : (
              ""
            )}

            {showReBetButton ? (
              <button
                className="btn"
                onClick={() => {
                  setShowBetInputAndNumberInput(false);
                  setUserGuessedNumber("");
                  setRandomValue("");
                  setCheckIfUserWin("");
                  setInputValue(0);
                }}>
                Bet again
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  ranDom();
                }}>
                Check computer number
              </button>
            )}
          </div>
        ) : (
          <div className="stakeDiv">
            <input
              type="number"
              placeholder="input a staking amount"
              onChange={StakeAmountInput}
            />
            <button
              className="btn"
              onClick={() => {
                removeSTaking();
                setShowReBetButton(false);
                setShowGuessInput(true);
                setShowGuessInput(true);
              }}>
              place bet
            </button>
            <div>
              <button
                className="benefitBtn"
                onClick={() => {
                  setShowBenefit(!showBenefit);
                }}>
                {/* check benefit */}{" "}
                {showBenefit ? "close benefit" : "open benefit"}
              </button>
            </div>
            {showBenefit && (
              <div>
                {" "}
                <h5 className="h5">
                  click{" "}
                  <button
                    onClick={() => {
                      setTotalBalance(20);
                    }}>
                    here
                  </button>{" "}
                  if you wish to go back to your default balance which is $20{" "}
                </h5>
              </div>
            )}
          </div>
        )}
              {/* <h2>frequently asked questions </h2> */}

      </div>

      <div>

{questions.map((question) => {
  return <Answer key={question.id} {...question} />;
})}
      </div>
    </div>
  );
};

export default Bet;
