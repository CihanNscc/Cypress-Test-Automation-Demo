"use client";

import { useState } from "react";
import bag from "@/public/images/bag.svg";
import pen from "@/public/images/pen.svg";
import plus from "@/public/images/plus.svg";
import minus from "@/public/images/minus.svg";
import ConfirmationModal from "@/components/confirmation-modal";
import { colors } from "@/lib/colors";
import Image from "next/image";

function PenCard() {
  const [colorChoice, setColorChoice] = useState(colors[0]);
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  function displayColorButtons() {
    return colors.map((color) => (
      <button
        key={color}
        className={`color-button ${color}`}
        onClick={() => setColorChoice(color)}
      />
    ));
  }

  function counterOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (!count || isNaN(value)) {
      setCount(0);
    }
    if (value < 0) {
      setCount(0);
    } else if (value > 10) {
      setCount(10);
    } else {
      setCount(value);
    }
  }

  function counterIncrement() {
    if (!count) {
      setCount(1);
    } else {
      setCount((count) => (count + 1 < 10 ? count + 1 : 10));
    }
  }

  function counterDecrement() {
    setCount((count) => (count - 1 > 0 ? count - 1 : 0));
  }

  return (
    <>
      <div>
        <div className="card">
          <div className="card-title">
            <Image src={pen} className="product-image" alt="Pen" />
            <h2>Cihan's Drawing Pen</h2>
          </div>
          <div className="card-body">
            <div className="counter-container">
              <Image
                src={plus}
                className="counter-icon"
                alt="Plus"
                onClick={counterIncrement}
              />
              <input
                className="counter"
                value={!count ? 0 : count}
                onChange={counterOnChange}
                placeholder="Enter count"
              />
              <Image
                src={minus}
                className="counter-icon"
                alt="Minus"
                onClick={counterDecrement}
              />
            </div>
            <div className="color-picker">
              {displayColorButtons()}
              <div className={`color-choice ${colorChoice}`} />
            </div>
            <div>
              <button
                className="checkout-button"
                onClick={() => {
                  if (count > 0) {
                    setModalOpen(true);
                  }
                }}
                style={count === 0 || !count ? { opacity: 0.5 } : {}}
              >
                <Image src={bag} className="icon" alt="Bag" /> Checkout
              </button>
              <ConfirmationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={() => {
                  setCount(0);
                  setColorChoice(colors[0]);
                  setModalOpen(false);
                }}
                children={
                  <p>
                    Are you sure you want to checkout{" "}
                    <strong>
                      {count} {colorChoice}
                    </strong>{" "}
                    colored pen{count > 1 ? "s" : ""}?
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PenCard;
