import { useMemo } from "react";
import { areasSlice } from '../../state/slices/areasSlice';
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { metersSlice } from "../../state/slices/metersSlice";

export const useAction = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators({ ...areasSlice.actions, ...metersSlice.actions }, dispatch), [dispatch])
}