import { useMemo } from "react";
import { areasSlice } from './../../state/slices/areasSlices';
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useAction = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators({ ...areasSlice.actions }, dispatch), [dispatch])
}