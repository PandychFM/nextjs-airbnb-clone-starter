import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";

export const TripEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="listing.id" reference="Listing" label="listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
