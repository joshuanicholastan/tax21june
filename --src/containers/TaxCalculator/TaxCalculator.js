import React, { Component } from 'react';
import styles from './TaxCalculator.module.css';
import { connect } from 'react-redux';

import TaxInput from '../../components/TaxInput/TaxInput';
import AddValues from './AddValues';

//MaterialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid, Button, Typography, Stepper, Step, StepLabel
} from '../../materialImports';

//Actions
import {
    newTaxInfo, cleanTaxObj
} from '../../actions'
import taxInput from '../../components/TaxInput/TaxInput';
import { textAlign } from '@material-ui/system';

const stylesMUI = theme => ({
    button: { margin: theme.spacing.unit, },
    input: { display: 'none', },
    root: { flexGrow: 1, width: '100%', },
    grow: { flexGrow: 1, },

    //Stepper CSS
    backButton: { marginRight: theme.spacing.unit, },
    instructions: { marginTop: theme.spacing.unit, marginBottom: theme.spacing.unit, },
});

function getSteps() {
    return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

/* 
STEP 1, n = 16
this.props.taxInfo.YA

this.props.taxInfo.REV
this.props.taxInfo.PIC
this.props.taxInfo.OI
this.props.taxInfo.DISP_FA
this.props.taxInfo.BANK_ACC
this.props.taxInfo.RE
this.props.taxInfo.SHARE_CAP
this.props.taxInfo.CA
this.props.taxInfo.EA
this.props.taxInfo.ACC_REC
this.props.taxInfo.PREPAY
this.props.taxInfo.FFE
this.props.taxInfo.ACCUM_DEPR_FFE
this.props.taxInfo.COMP
this.props.taxInfo.ACCUM_DEPR_CE

STEP 2, n = 10
this.props.taxInfo.ACC_PAYABLE
this.props.taxInfo.GST
this.props.taxInfo.CONV_NOTES
this.props.taxInfo.NDE_ENT
this.props.taxInfo.NDE_GEN_EXP
this.props.taxInfo.NDE_TRAINING
this.props.taxInfo.NDE_MED
this.props.taxInfo.NTI_PIC
this.props.taxInfo.NTI_DISP_FA
this.props.taxInfo.NTI_GOV_GRANT

STEP 3, n = 16
this.props.taxInfo.COS
this.props.taxInfo.AG_COMM
this.props.taxInfo.ADVERT
this.props.taxInfo.ADMIN
this.props.taxInfo.BANK_FEES
this.props.taxInfo.SECT_FEES
this.props.taxInfo.DEPR_FFE
this.props.taxInfo.DEPR_CE
this.props.taxInfo.ENT
this.props.taxInfo.CORP_GIFT
this.props.taxInfo.GEN_EXP
this.props.taxInfo.FINE
this.props.taxInfo.UTLS
this.props.taxInfo.OFF_EXP
this.props.taxInfo.WEB_SERV
this.props.taxInfo.RENT

STEP 4, n = 16
this.props.taxInfo.HR_EXP
this.props.taxInfo.SALAR
this.props.taxInfo.DIR_REMUN
this.props.taxInfo.CPF
this.props.taxInfo.ALLOWANCE_TPT
this.props.taxInfo.SKILL_DEV
this.props.taxInfo.TRAINING
this.props.taxInfo.MED_EXP
this.props.taxInfo.MED_INS
this.props.taxInfo.TEL_INT
this.props.taxInfo.ROUNDING
this.props.taxInfo.COMM
this.props.taxInfo.MAINT
this.props.taxInfo.IT_DEV
this.props.taxInfo.TPT
this.props.taxInfo.PRIV_CAR_EXP
*/

class TaxCalculator extends Component {

    state = { activeStep: 0, 
        stageError: '' ,
        testSum: 0.0
        };

    addValues = (arr) => {
        let sum = 0.0;
        for (let i = 0; i <arr.length; i++){
            sum += parseFloat(this.props.taxInfo[arr[i]].value);
        }
        return sum;
    }
        
    handleNext = () => {
        switch (this.state.activeStep) {
            case 0: this.setState(state => ({ activeStep: state.activeStep + 1, stageError: '' })); break;
            case 1: this.setState(state => ({ activeStep: state.activeStep + 1, stageError: '' })); break;
            case 2: this.setState(state => ({ activeStep: state.activeStep + 1, stageError: '' })); break;
            case 3: this.setState(state => ({ activeStep: state.activeStep + 1, stageError: '' })); break;
            default: break;
        }
    };

    handleSubmit = () => {
        let hi = this.addValues(['REV', 'OI']);
        alert(hi);
    }

    createField = (arr) => {
        let fields = [];

        for (let i = 0; i<arr.length; i++){
            try {let current = <TaxInput 
                label={this.props.taxInfo[arr[i]].title} 
                field = {this.props.taxInfo[arr[i]].field} 
                value={this.props.taxInfo[arr[i]].value}
                changed={this.changeInput} />;
            fields.push(current);}
            catch{
                fields.push(<div style = {{textAlign: 'center', padding: '5px'}}>Error loading: {arr[i]}</div>)
            }
        }


        return fields;
    }

    getStepContent = (stepIndex) => {
        const form1P1Fields = this.createField(['REV','PIC', 'OI', 'DISP_FA', 'BANK_ACC', 'RE','SHARE_CAP']);
        const form1P2Fields = this.createField(['CA', 'EA', 'ACC_REC', 'PREPAY', 'FFE', 'ACCUM_DEPR_FFE', 'COMP', 'ACCUM_DEPR_CE']);
        const form2P1Fields = this.createField(['ACC_PAYABLE','GST','CONV_NOTES','NDE_ENT', 'NDE_GEN_EXP']);
        const form2P2Fields = this.createField(['NDE_TRAINING','NDE_MED','NTI_PIC','NTI_DISP_FA', 'NTI_GOV_GRANT']);
        const form3P1Fields = this.createField(['COS','AG_COMM','ADVERT','ADMIN','BANK_FEES','SECT_FEES','DEPR_FFE','DEPR_CE']);
        const form3P2Fields = this.createField(['ENT','CORP_GIFT','GEN_EXP','FINE', 'UTLS', 'OFF_EXP', 'WEB_SERV','RENT']);
        const form4P1Fields = this.createField(['HR_EXP','SALAR','DIR_REMUN', 'CPF', 'ALLOWANCE_TPT', 'SKILL_DEV','TRAINING','MED_EXP']);
        const form4P2Fields = this.createField(['MED_INS','TEL_INT','ROUNDING','COMM', 'MAINT', 'IT_DEV', 'TPT', 'PRIV_CAR_EXP']);
       
        switch (stepIndex) {   
            case 0: //FORM PAGE 1
                return (
                    <div>
                        <Grid
                            container spacing={24}
                            justify='center'>
                            <Grid
                                item xs={12}
                                sm={12}
                                md={5}>
                                <TaxInput
                                    picker
                                    label={this.props.taxInfo.YA.title}
                                    field={this.props.taxInfo.YA.field}
                                    value={this.props.taxInfo.YA.value}
                                    changed={this.changeInput} 
                                 />
                                 {form1P1Fields}
                            
                            </Grid>
                            <Grid
                                item xs={12}
                                sm={12}
                                md={5}>
                                {form1P2Fields}
                                <div className={styles.ncbutton}>
                                    <Button
                                        disabled
                                        style={{ marginRight: '4%' }}>
                                        Back </Button>
                                    <Button
                                        onClick={this.handleNext}
                                        variant="contained"
                                        color="primary"
                                        style={{ marginRight: '8%' }}>
                                        Next </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                );
            case 1: //FORM PAGE 2
                return (
                    <div>
                        <Grid
                            container spacing={24}
                            justify='center'>
                            <Grid
                                item xs={12}
                                sm={12}
                                md={5}>
                                {form2P1Fields}
                            </Grid>
                            <Grid
                                item xs={12}
                                sm={12}
                                md={5}>
                                {form2P2Fields}
                                <div className={styles.ncbutton}>
                                    <Button
                                        onClick = {this.handleBack}
                                        style={{ marginRight: '4%' }}>
                                        Back </Button>
                                    <Button
                                        onClick={this.handleNext}
                                        variant="contained"
                                        color="primary"
                                        style={{ marginRight: '8%' }}>
                                        Next </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                );
            case 2: //FORM PAGE 3
                return (
                    <div>
                    <Grid
                        container spacing={24}
                        justify='center'>
                        <Grid
                            item xs={12}
                            sm={12}
                            md={5}>
                            {form3P1Fields}
                        </Grid>
                        <Grid
                            item xs={12}
                            sm={12}
                            md={5}>
                            {form3P2Fields}
                            <div className={styles.ncbutton}>
                                <Button
                                    onClick = {this.handleBack}
                                    style={{ marginRight: '4%' }}>
                                    Back </Button>
                                <Button
                                    onClick={this.handleNext}
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: '8%' }}>
                                    Next </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                );
            case 3: //FORM PAGE 4
                return (                    
                    <div>
                    <Grid
                        container spacing={24}
                        justify='center'>
                        <Grid
                            item xs={12}
                            sm={12}
                            md={5}>
                            {form4P1Fields}
                        </Grid>
                        <Grid
                            item xs={12}
                            sm={12}
                            md={5}>
                            {form4P2Fields}
                            <div className={styles.ncbutton}>
                                <Button
                                    onClick = {this.handleBack}
                                    style={{ marginRight: '4%' }}>
                                    Back </Button>
                                <Button
                                    onClick={this.handleNext}
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: '8%' }}>
                                    Next </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>                
                );
            default: 
                return 'Unknown stepIndex';
        }
    }

    handleBack = () => {
        this.setState(state => ({ activeStep: state.activeStep - 1, stageError: '' }));
    };
    handleReset = () => {
        this.props.cleanTaxObj();
        this.setState({ activeStep: 0 });
    };

    changeInput = (event) => {
        this.props.newTaxInfo({ field: event.target.name, value: event.target.value })
    }

    render () {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
            <div className={classes.root}>
                <div className={styles.newTaxSection}>
                    <div><p className={styles.titleStyle}>Generate New Tax</p></div>
                    <div style={{ backgroundColor: 'white' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {
                                steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))
                            }
                        </Stepper>
                        <div>
                            {this.state.activeStep === (steps.length) ? (
                                <div>
                                    <Grid 
                                        container spacing={24}
                                        justify='center'>
                                        <Typography className = {classes.instructions}>All steps completed</Typography>
                                        <Button onClick={this.handleReset}>Reset</Button>
                                        <Button variant="contained" color = 'primary' type = 'submit' onClick = {this.handleSubmit}>Confirm and Submit</Button>
                                    </Grid>
                                </div>
                            ) : (
                                    <div>
                                        {this.getStepContent(activeStep)}
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TaxCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ tax }) => {
    const { taxInfo } = tax;
    return { taxInfo }
}

export default connect(mapStateToProps, {
    newTaxInfo, cleanTaxObj,
})(withStyles(stylesMUI)(TaxCalculator));