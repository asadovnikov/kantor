import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listJumioVerifyMetaDatas } from '../backGraph/queries';

const lookupByJumio = async (verification, jumioState) => {
	const {data: {listJumioVerifyMetaDatas: { items = [] },},} = await API.graphql(graphqlOperation(listJumioVerifyMetaDatas, { filter: { verificationID:{eq: verification}, JumioVerifyStatus: { eq: jumioState } } }));	
	return items;
}
const verificationStatusMap = {
'NO_ID_UPLOADED': ''
}

const idTypeMap = {
  'ID_CARD': ''
  }

  const idSubTypeMap = {
    'RESIDENT_PERMIT_ID': ''
    };

const fields = [
  'Status', //idScanStatus or status
  'Verification Status', //verificationStatus or status (not)
  'Type',
  'Country',
  'First Name',
  'Last Name',
  
];
const extractedAddressMap = (address) => {
  return {
    line1: address.line1,
    line2: address.line2,
    city: address.city,
    postalCode: address.postalCode
  };
}

const extractedDocumentMap = (document) => {

}

const docFieldMap = document => {
  return {

  }
}

const transactionFieldMap = transaction => {

}
const documentVerifyMap = record => {
  return {
    scanRef: record.scanReference
  }
}

const newVerifyMap = record => {
  return {
    customerId: record.customerId,
    scanStatus: record.idScanStatus,
    scanRef: record.jumioIdScanReference,
    merchantRef: record.merchantIdScanReference,
    date: record.transactionDate,
    verificationStatus: record.verificationStatus,
    country: record.idCountry || 'N/A',
    dateOfBirth: record.idDob || 'N/A',
    expiration: record.idExpiry || 'N/A',
    firstName: record.idFirstName || 'N/A',
    lastName: record.idLastName || 'N/A',
    docNumber: record.idNumber || 'N/A',
    documentSubType: record.idSubtype || 'N/A',
    documentType: record.idType || 'N/A',
    issuingDate: record.issuingDate || 'N/A',
    nationality: record.nationality || 'N/A',
    optionalData1: record.optionalData1 || 'N/A',
    optionalData2: record.optionalData2 || 'N/A',
    personalNumber: record.personalNumber || 'N/A'
  }
};

const mapJumioRecord = (record) => {

}

export const useJumioRecord = (verificationId, jumioState) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
		setLoading(true);
		let canceled = false;
		lookupByJumio(verificationId, jumioState)
			.then(items => {
					if (!canceled) {
						setRecords(
							items
								.map((user) => {
									return {
										...user,
										customerName: `${user.Firstname}, ${user.Surname}`,
										createdOn: new Date(user.createdOn).toLocaleString(),
									};
								})
						);
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, []);
  
  return [records, loading];
}