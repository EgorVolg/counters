import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { areasSlice } from '../../state/slices/areasSlices'

export const useAction = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators({ ...areasSlice.actions }, dispatch), [dispatch])
}
