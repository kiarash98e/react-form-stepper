/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Radio, RadioGroup, Typography, FormControlLabel, FormControl } from '@mui/material'
import React, { FormEvent } from 'react'
import Input from '../ui/input'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
import useFormRedux from '../../redux/selector/formSelector'
import { useStyles } from './style'
import Select from '../ui/select'


const userDetail: React.FC = () => {


    const classes = useStyles()
    const { formState, choosenMaqte, choosenIsBomi, choosenVazyat, choosenSaletahsili, choosenUniCode, choosenCodeMeli, choosenFirstname, choosenLastname, choosenGender, choosenPhone, choosenSabetPhone } = useFormRedux()

    const firstName = formState.firstName
    const lastName = formState.lastName
    const phone = formState.phone
    const sabetPhone = formState.sabetPhone
    const gender = formState.gender
    const codeMeli = formState.codeMeli
    const uniCode = formState.uniCode
    const vazit = formState.vazitZendgi
    const salTahsili = formState.saleTahseil
    const bomi = formState.bomiHsti
    const maqte = formState.maqte
    // const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName,
            lastName,
            phone,
            sabetPhone,
            gender,
            codeMeli,
            uniCode,
            vazit,
            salTahsili,
            bomi,
            maqte
        }
    })

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        salTahsili,
        phone,
        sabetPhone,
        gender,
        codeMeli,
        uniCode,
        vazit,
        bomi,
        maqte,
    })

    const submitHandler = (e: FormEvent) => {
        const { value, name } = e.target as any
        setFormData({
            ...formData,
            [name]: value
        })
    }
    

    const onSubmit = () => {
        choosenFirstname(formData.firstName)
        choosenLastname(formData.lastName)
        choosenPhone(Number(formData.phone))
        choosenCodeMeli(Number(formData.codeMeli))
        choosenUniCode(Number(formData.uniCode))
        choosenSabetPhone(Number(formData.sabetPhone))
        choosenGender(formData.gender)
        choosenSaletahsili(formData.salTahsili)
        choosenVazyat(formData.vazit)
        choosenIsBomi(formData.bomi)
        choosenMaqte(formData.maqte)
        // navigate("/auth-account")
    }
    return (
        <Box sx={{ width: "100%", height: "auto", py: 2, display: "flex", flexDirection: "column" }}>
            <form style={{ paddingTop: "10px", paddingBottom: "10px" }} onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input
                        label="??????"
                        value={formData.firstName}
                        refIn={(input: any) => input && input.focus()}

                        {
                        ...register(
                            "firstName", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />
                    {errors.firstName?.type === "required" &&
                        <span className={classes.Error}>{errors.firstName.message}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input
                        label=" ?????? ????????????????"
                        refIn={(input: any) => input && input.focus()}
                        value={formData.lastName}
                        {
                        ...register(
                            "lastName", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />
                    {errors.lastName?.type === "required" &&
                        <span className={classes.Error}>{errors.lastName.message}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input
                        label=" ?????????? ???????? ??????????"
                        refIn={(input: any) => input && input.focus()}
                        value={formData.phone}
                        {
                        ...register(
                            "phone", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />
                    {errors.phone?.type === "required" &&
                        <span className={classes.Error}>{errors.phone?.message?.toString()}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input
                        label=" ?????????? ???????? ???????? ???? ?????????? ???? ??????????"
                        refIn={(input: any) => input && input.focus()}
                        value={formData.phone}
                        {
                        ...register(
                            "sabetPhone", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />
                    {errors.sabetPhone?.type === "required" &&
                        <span className={classes.Error}>{errors.sabetPhone?.message?.toString()}</span>
                    }
                </Box>
                <Box
                    sx={{ display: "flex", direction:"rtl",flexWrap: "wrap", justifyContent:"space-between",px:"10px", flexDirection: "row" }}
                >

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ direction: "rtl", textAlign: "right" }} component={"span"}>?????????????? ????????</Typography>
                        <RadioGroup
                            style={{
                                display: 'flex !important',

                            }}
                            sx={{ direction: "rtl", textAlign: "right" }}
                            aria-label='?????????? ????????'
                            value={formData.bomi}
                            {
                            ...register(
                                "bomi", {
                                onChange(event) {
                                    submitHandler(event)
                                },
                                required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                            }
                            )

                            }
                        >
                            <div style={{display: 'flex',
                            }}>
                                <FormControlLabel
                                sx={{px:1}}
                                value={true}
                                control={<Radio />}
                                label="????????"
                                style={{ display: "inline-block" }}
                            />
                            <FormControlLabel sx={{px:1}} value={false}
                                style={{ display: "inline-block" }}

                                control={<Radio />} label="??????????????" />
                        
                            </div>
                        </RadioGroup>
                        {errors.gender?.type === "required" &&
                            <span className={classes.Error}>{errors.gender?.message?.toString()}</span>
                        }
                    </Box>
                    <Box className={classes.radio} sx={{ marginTop:{
                                xs:"30px",
                                sm:"30px",
                                md:"30px",
                                lg:0,
                                xl:0
                            },display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ direction: "rtl", textAlign: "right" }} component={"span"}>?????????? ????????</Typography>
                        <RadioGroup
                            style={{
                                display: 'flex !important',
                            }}
                            sx={{ direction: "rtl", textAlign: "right" }}
                            aria-label='?????????? ????????'
                            value={formData.vazit}
                            {
                            ...register(
                                "vazit", {
                                onChange(event) {
                                    submitHandler(event)
                                },
                                required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                            }
                            )

                            }
                        >
                            <div style={{display: 'flex',
                            }}>
                                <FormControlLabel
                                sx={{px:1}}
                                value={"single"}
                                control={<Radio />}
                                label="????????"
                                style={{ display: "inline-block" }}
                            />
                            <FormControlLabel sx={{px:1}} value={"mothel"}
                                style={{ display: "inline-block" }}

                                control={<Radio />} label="??????????" />
                        
                            </div>
                        </RadioGroup>
                        {errors.gender?.type === "required" &&
                            <span className={classes.Error}>{errors.gender?.message?.toString()}</span>
                        }
                    </Box>
                </Box>
                <Box sx={{ my: 4, px:"10px",display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ direction: "rtl", textAlign: "right" }} component={"span"}>??????????</Typography>
                    <RadioGroup
                        style={{
                            display: 'flex !important',

                        }}
                        sx={{ direction: "rtl", textAlign: "right" }}
                        aria-label='??????????'
                        value={formData.gender}
                        {
                        ...register(
                            "gender", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }
                    >
                        <div style={{
                            display: 'flex',
                            
                        }}>
                            <FormControlLabel
                            value="Fmale"
                            control={<Radio />}
                            label="????"
                            sx={{px:1}}
                            style={{ display: "inline-block" }}
                        />
                    
                        <FormControlLabel sx={{px:1}} value="Male"
                            style={{ display: "inline-block" }}

                            control={<Radio />} label="??????" />
                    
                        </div>
                    </RadioGroup>
                    {errors.gender?.type === "required" &&
                        <span className={classes.Error}>{errors.gender?.message?.toString()}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input

                        label=" ???? ??????"
                        refIn={(input: any) => input && input.focus()}
                        value={formData.codeMeli}
                        {
                        ...register(
                            "codeMeli", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />
                    {errors.codeMeli?.type === "required" &&
                        <span className={classes.Error}>{errors.codeMeli?.message?.toString()}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <Input

                        label="?????????? ????????????????"
                        refIn={(input: any) => input && input.focus()}
                        value={formData.uniCode}
                        {
                        ...register(
                            "uniCode", {
                            onChange(event) {
                                submitHandler(event)
                            },
                            required: "???? ???????? ?????? ?????? ?????????? ???? ????????"
                        }
                        )

                        }

                    />  
                    {errors.uniCode?.type === "required" &&
                        <span className={classes.Error}>{errors.uniCode?.message?.toString()}</span>
                    }
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
                    <FormControl sx={{ height:"100%",direction: "rtl", textAlign: "right"  }} variant='outlined' fullWidth>
                        <Select
                            options={items}
                            label={"?????? ???????? ??????????"}
                            value={formData.maqte}
                            placeholder={"?????? ???????? ??????????"}
                            name={"salTahsili"} 
                            limitTags={1} 
                            onChange={submitHandler}
                        />
                    </FormControl>
                    {errors.salTahsili?.type === "required" &&
                        <span className={classes.Error}>{errors.salTahsili?.message?.toString()}</span>
                    } 
                </Box>
                <Box sx={{ my: 4, display: "flex", flexDirection: "column", textAlign: "right",direction:"rtl" }}>
                    <FormControl sx={{ height:"100%",position:"relative",textAlign:"right" }} variant='outlined' fullWidth>
                        <Select
                            options={items}
                            label={"???????? ????????????"}
                            value={formData.maqte}
                            placeholder={"???????? ????????????"}
                            name={"maqte"} 
                            limitTags={1} 
                            multiple={false}
                            onChange={submitHandler}
                        />
                    </FormControl>
                    {errors.maqte?.type === "required" &&
                        <span className={classes.Error}>{errors.maqte?.message?.toString()}</span>
                    }
                </Box>
            </form>
        </Box>
    )
}

let items = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "?????? ?? ????????", label: "?????? ?? ????????" },
]

export default userDetail