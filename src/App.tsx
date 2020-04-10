/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { useConfirm } from "./factory/useConfirm";
import { preventEventer } from "./factory/usePreventLeave";
import { useBeforeLeave } from "./factory/useBeforeLeave";
import { useAnimation } from "./factory/useAnimation";

const App = () => {
  ////////////confirm/////////////////////////
  const getRidOf = () => console.log("it is successfully removed");
  const remain = () => console.log("good idea");
  const deleteMessage = useConfirm("Are you sure?", getRidOf, remain);
  ////////////////////////////////////////////

  ///////////usePreventLeave//////////////////
  const { enablePrevent, disablePrevent } = preventEventer();
  ///////////////////////////////////////////

  ////////////mouseLeave////////////////////
  useBeforeLeave();
  //////////////////////////////////////////

  ///////////useAnimation//////////////////
  const el = useAnimation(1, 1);
  const el2 = useAnimation(2, 2);
  /////////////////////////////////////////
  return (
    <div>
      <h1 {...el}>Hello</h1>
      <h2 {...el2}>To make our world better...</h2>
      <button onClick={deleteMessage}>Delete the world</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
