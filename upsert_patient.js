// =============================================================================
// Upsert Patient records in Salesforce from patient case updates in Commcare.
// test, feb 7th
// =============================================================================
upsert("Patient__c", "CAST Patient ID", fields(
  field('CAST Patient ID', dataValue('properties.patient_id')),
  field('Secondary ID', dataValue('properties.secondary_id')),
  field('Secondary ID Type', dataValue('properties.secondary_id_type')),
  field('Registration Date', dataValue('properties.registration_date')),
  field('Clinic', dataValue('properties.hospital_code')),
  field('Clinic__c.Name__c', dataValue('properties.hospital_name')),
  field('First Name', dataValue('properties.patient_first_name')),
  field('Last Name', dataValue('properties.patient_last_name')),
  field('Gender', dataValue('properties.patient_gender')),
  field('Date of Birth Known', dataValue('properties.patient_dob_known')),
  field('Date of Birth', dataValue('properties.patient_dob')),
  field('Country', dataValue('properties.country')),
  field('Location Level 1', dataValue('properties.location_level1')),
  field('Location Level 2', dataValue('properties.location_level2')),
  field('Location Level 3', dataValue('properties.location_level3')),
  field('Pin Code', dataValue('properties.pin_code')),
  field('Address', dataValue('properties.patient_address')),
  field('Additional Abnormalities', dataValue('properties.abnormalities')),
  field('Other Abnormalities Specified', dataValue('properties.abnormalities_other')),
  field('Consent Given for Treatment?', dataValue('properties.consent_treatment')),
  field('Consent Given for Database? ', dataValue('properties.consent_included')),
  field('Consent Given for Photographs Marketing? ', dataValue('properties.consent_photograph_marketing')),
  field('Consent Given for Photographs Treatment? ', dataValue('properties.consent_photograph_treatment')),
  field('Diagnosis Category', dataValue('properties.diagnosis')),
  field('Diagnosis Sub-Category', dataValue('properties.diagnosis_idiopathic_specified')),
  field('Diagnosis Sub-Category', dataValue('properties.diagnosis_secondary_specified')),
  field('Diagnosis Notes', dataValue('properties.diagnosis_notes')),
  field('Feet Affected', dataValue('properties.feet_affected')),
  field('Referral Source', dataValue('properties.referral_source')),
  field('Other Referral Source', dataValue('properties.referral_source_other')),
  field('Hospital/Clinic Referral Source', dataValue('properties.referral_source_health_facility')),
  field('Doctor Referral Source', dataValue('properties.referral_source_doctor')),
  field('Guardian 1 Name', dataValue('properties.guardian1_name')),
  field('Guardian 1 Relationship', dataValue('properties.guardian1_relationship')),
  field('Guardian 1 Other Relationship ', dataValue('properties.guardian1_relationship_other')),
  field('Guardian 1 Phone 1', dataValue('properties.guardian1_phone1')),
  field('Guardian 1 Phone 2', dataValue('properties.guardian1_phone2')),
  field('Guardian 2 Name', dataValue('properties.guardian2_name')),
  field('Guardian 2 Relationship', dataValue('properties.guardian2_relationship')),
  field('Guardian 2 Other Relationship', dataValue('properties.guardian2_relationship_other')),
  field('Guardian 2 Phone 1', dataValue('properties.guardian2_phone1')),
  field('Guardian 2 Phone 2', dataValue('properties.guardian2_phone2')),
  field('Guardian 3 Name', dataValue('properties.guardian3_name')),
  field('Guardian 3 Relationship', dataValue('properties.guardian3_relationship')),
  field('Guardian 3 Other Relationship', dataValue('properties.guardian3_relationship_other')),
  field('Guardian 3 Phone 1', dataValue('properties.guardian3_phone1')),
  field('Guardian 3 Phone 2', dataValue('properties.guardian3_phone2')),
  field('Next Visit Date', dataValue('properties.next_visit_date')),
  field('Date Patient Transferred', dataValue('properties.transfer_date')),
  field('Clinic Transferred To', dataValue('properties.transfer_clinic')),
  field('Mobile User Patient Closed By in CAST', dataValue('properties.closed_by_username')),
  field('Date Patient Case Opened in CAST', dataValue('properties.opened_date')),
  field('Mobile User Patient Created By in CAST', dataValue('properties.opened_by_username')),
  field('Date Patient Last Modified in CAST', dataValue('properties.last_modified_date')),
  field('Last Modified By User Name', dataValue('properties.last_modified_by_username')),
  field('Date Patient Case Closed in CAST', dataValue('properties.closed_date')),
  field('Reason Patient Case Closed', dataValue('properties.close_reason')),
  field('CommCare Case ID', dataValue('properties.caseid')),
  field('Next Contact Date', dataValue('properties.next_contact_date')),
  field('Age First Brace', dataValue('properties.age_first_brace')),
  field('Date Stopped Treatment', dataValue('properties.stop_date')),
  field('Reason Stopped Treatment', dataValue('properties.stop_reason')),
  field('Reason Stopped Treatment Other', dataValue('properties.stop_reason_other'))
))
