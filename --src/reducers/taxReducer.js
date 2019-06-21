import {
    NEW_TAX_INFO,
    CLEAN_TAX_OBJ,
} from '../actions/types'

const INITIAL_STATE = {
    taxInfo: {
        REV: { field: "REV", title: "Revenue", value: 3000 },
        PIC: { field: "PIC", title: "PIC Cash Payout", value: 0 },
        OI: { field: "OI", title: "Other Income", value: 0 },
        DISP_FA: { field: "DISP_FA", title: "Gain on disposal of fixed assets", value: 0 },
        COS: { field: "COS", title: "Cost of Sales", value: 0 },
        AG_COMM: { field: "AG_COMM", title: "Agency Commission", value: 0 },
        ADVERT: { field: "ADVERT", title: "Advertising", value: 0 },
        ADMIN: { field: "ADMIN", title: "Administrative", value: 0 },
        BANK_FEES: { field: "BANK_FEES", title: "Bank Fees", value: 0 },
        SECT_FEES: { field: "SECT_FEES", title: "Secretarial Fees", value: 0 },
        DEPR_CE: { field: "DEPR_CE", title: "Depreciation - Computer Equipment", value: 0 },
        DEPR_FFE: { field: "DEPR_FFE", title: "Depreciation - FFE", value: 0 },
        ENT: { field: "ENT", title: "Entertainment", value: 0 },
        CORP_GIFT: { field: "CORP_GIFT", title: "Corporate Gifts", value: 0 },
        GEN_EXP: { field: "GEN_EXP", title: "General Expenses", value: 0 },
        FINE: { field: "FINE", title: "Fines/ Penalties", value: 0 },
        UTLS: { field: "UTLS", title: "Utilities", value: 0 },
        OFF_EXP: { field: "OFF_EXP", title: "Office Expenses", value: 0 },
        WEB_SERV: { field: "WEB_SERV", title: "Web Services", value: 0 },
        RENT: { field: "RENT", title: "Rent", value: 0 },
        HR_EXP: { field: "HR_EXP", title: "Human Resource Expense", value: 0 },
        SALAR: { field: "SALAR", title: "Wages and Salaries", value: 0 },
        DIR_REMUN: { field: "DIR_REMUN", title: "Director's Remuneration", value: 0 },
        CPF: { field: "CPF", title: "Employer's CPF", value: 0 },
        ALLOWANCE_TPT: { field: "ALLOWANCE_TPT", title: "Allowance - Transport", value: 0 },
        SKILL_DEV: { field: "SKILL_DEV", title: "Skill Development Fund", value: 0 },
        TRAINING: { field: "TRAINING", title: "Staff Training", value: 0 },
        MED_EXP: { field: "MED_EXP", title: "Medical Expenses", value: 0 },
        MED_INS: { field: "MED_INS", title: "Medical Insurance", value: 0 },
        TEL_INT: { field: "TEL_INT", title: "Telephone & Internet", value: 0 },
        ROUNDING: { field: "ROUNDING", title: "Rounding", value: 0 },
        COMM: { field: "COMM", title: "Commission", value: 0 },
        MAINT: { field: "MAINT", title: "Repair and Maintenance", value: 0 },
        IT_DEV: { field: "IT_DEV", title: "IT Development", value: 0 },
        TPT: { field: "TPT", title: "Transport", value: 0 },
        PRIV_CAR_EXP: { field: "PRIV_CAR_EXP", title: "Private Car Expenses", value: 0 },
        BANK_ACC: { field: "BANK_ACC", title: "Bank Account", value: 0 },
        ACC_REC: { field: "ACC_REC", title: "Accounts Receivable", value: 0 },
        PREPAY: { field: "PREPAY", title: "Prepayments", value: 0 },
        FFE: { field: "FFE", title: "Furniture, Fittings and Equipment", value: 0 },
        ACCUM_DEPR_FFE: { field: "ACCUM_DEPR_FFE", title: "Less Accumulated Depreciation on FFE", value: 0 },
        COMP: { field: "COMP", title: "Computer Equipment", value: 0 },
        ACCUM_DEPR_CE: { field: "ACCUM_DEPR_CE", title: "Less Accumulated Depreciation on Computer Equipment", value: 1 },
        ACC_PAYABLE: { field: "ACC_PAYABLE", title: "Accounts Payable", value: 0 },
        GST: { field: "GST", title: "GST", value: 0 },
        CONV_NOTES: { field: "CONV_NOTES", title: "Convertible Notes", value: 0 },
        RE: { field: "RE", title: "Retained Earnings", value: 0 },
        SHARE_CAP: { field: "SHARE_CAP", title: "Share Capital", value: 0 },
        NDE_ENT: { field: "NDE_ENT", title: "Non-Deductable entertainment", value: 0 },
        NDE_GEN_EXP: { field: "NDE_GEN_EXP", title: "Non-Deductable general expenses", value: 0 },
        NDE_TRAINING: { field: "NDE_TRAINING", title: "Non-Deductable training expenses converted to PIC cash payout", value: 0 },
        NDE_MED: { field: "NDE_MED", title: "Non-Deductible portion of medial expenses/ insurance", value: 0 },
        NTI_PIC: { field: "NTI_PIC", title: "Non-Taxible Income PIC cash payout", value: 0 },
        NTI_DISP_FA: { field: "NTI_DISP_FA", title: "Non-Taxible Income Gain on disposal of fixed assets", value: 0 },
        NTI_GOV_GRANT: { field: "NTI_GOV_GRANT", title: "Non-Taxible Income Government grant", value: 0 },
        CA: { field: "CA", title: "Capital allowances", value: 0 },
        EA: { field: "EA", title: "Enhanced allowances", value: 0 },
        YA: { field: "YA", title: "Year of Assessment", value: 2019 },
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_TAX_INFO:
            var obj = { ...state.taxInfo };
            (obj[action.payload.field]).value = action.payload.value;
            return { ...state, taxInfo: { ...state.taxInfo, ...obj } }
        case CLEAN_TAX_OBJ:
            return { ...state, taxInfo: INITIAL_STATE.taxInfo }
        default:
            return state;
    }
}