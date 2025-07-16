import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 10000000; // Very long delay

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId, dispatch) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const ToastContext = React.createContext();

function toastReducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.toast].slice(-TOAST_LIMIT);
    case "UPDATE_TOAST":
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
    case "DISMISS_TOAST":
      return state.map((t) =>
        t.id === action.toastId || action.toastId === undefined
          ? { ...t, open: false }
          : t
      );
    case "REMOVE_TOAST":
      return state.filter((t) => t.id !== action.toastId);
    default:
      return state;
  }
}

export function ToastProvider({ children }) {
  const [state, dispatch] = React.useReducer(toastReducer, []);

  const value = {
    toasts: state,
    addToast: (toast) => {
      const id = toast.id ?? genId();

      const newToast = {
        ...toast,
        id,
        open: true,
      };

      dispatch({
        type: "ADD_TOAST",
        toast: newToast,
      });

      addToRemoveQueue(id, dispatch);

      return id;
    },
    updateToast: (toast) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast,
      }),
    dismissToast: (toastId) => {
      dispatch({
        type: "DISMISS_TOAST",
        toastId,
      });

      if (toastId) {
        clearTimeout(toastTimeouts.get(toastId));
        toastTimeouts.delete(toastId);
        dispatch({
          type: "REMOVE_TOAST",
          toastId,
        });
      }
    },
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
