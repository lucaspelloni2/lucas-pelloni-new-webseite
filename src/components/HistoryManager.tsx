import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useAppState from "../reducers/useAppState";
import { PAGE_HEIGHT } from "../Layout/Theme";

export const HistoryManager = () => {
  const { translation } = useAppState(s => s.translation);
  const { push } = useHistory();
  useEffect(() => {
    const normalized = Math.abs(translation);
    const index = Math.round(normalized / PAGE_HEIGHT) + 1;
    push(`#${index}`);
  }, [push, translation]);
  return null;
};
