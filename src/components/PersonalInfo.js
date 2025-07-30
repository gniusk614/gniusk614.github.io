import React from 'react';
import {MdCall} from "react-icons/md";
import {FaSms} from "react-icons/fa";
import {IconButton, Table, Typography} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const personalData = [
    {
        label: "아빠",
        phone: "010-5802-4735",
        account: "국민 604402-01-455355"
    },
    {
        label: "엄마",
        phone: "010-2663-4433",
        account: "국민 604402-01-455355"
    },

]


export default function PersonalInfo() {
    const clickCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    const clickSMS = (number) => {
        try {
            window.location.href = `sms:${number}`;
        } catch (e) {
            alert('문자보내기는 모바일에서만 가능합니다.');
        }
    };
    const copyAccount = (account) => {
        navigator.clipboard.writeText(account)
            .then(() => alert('계좌번호가 복사되었습니다!'))
            .catch(() => alert('복사에 실패했습니다.'));
    };

    return (
        <div style={{marginTop:"50px"}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{fontFamily: "'Noto Serif KR', serif", fontWeight: 'bold'}}>
                                연락처
                            </TableCell>
                            <TableCell align="center" colSpan={3}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {personalData.map((person, index) => (
                            <TableRow key={index}>
                                <TableCell style={{width: '40%', whiteSpace: 'nowrap'}}>
                                    <Typography style={{fontFamily: "'Noto Serif KR', serif"}}>
                                        {person.label}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right" style={{whiteSpace: 'nowrap'}}>
                                    <IconButton onClick={() => clickCall(person.phone)}>
                                        <MdCall style={{color: '#DBB47E'}}/>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" style={{whiteSpace: 'nowrap'}}>
                                    <IconButton onClick={() => clickSMS(person.phone)}>
                                        <FaSms style={{color: '#DBB47E'}}/>
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" style={{whiteSpace: 'nowrap'}}>
                                    <div style={{display: 'flex', alignItems: 'stretch'}}>
                                        <IconButton onClick={() => copyAccount(person.account)} size="small">
                                            <Typography
                                                style={{fontFamily: "'Noto Serif KR', serif", fontSize: "small"}}>
                                                계좌번호
                                            </Typography>
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}