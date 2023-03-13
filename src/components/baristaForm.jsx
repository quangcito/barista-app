import React, {Component, useState} from "react";
const BaristaForm = () => {

  return (
    <div>
      <form>

        // we will fill this in soon!

      </form>

      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
}

export default BaristaForm;
