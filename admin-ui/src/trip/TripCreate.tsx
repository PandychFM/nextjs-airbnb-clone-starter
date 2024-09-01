import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";

export const TripCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="listing.id" reference="Listing" label="listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
