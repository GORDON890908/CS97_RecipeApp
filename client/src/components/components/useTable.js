import { makeStyles, Table } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme =>({

    table: {
        marginTop: theme.spacing(3),
        '& tbody td':{
            fontWEight: '300'
        },
    },

    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function useTable (records, headCells){
    
    const classes = useStyles()
    
    const TblContainer = props => (
        <Table className = {classes.table}>
            {props.children}
        </Table>
    )
    return {TblContainer}

}