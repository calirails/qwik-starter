import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import ContactsCmp from "../../components/contacts";
import { ContactDetail  } from "~/types/ui-types";

export const useContactLoader = routeLoader$(async () => {
  const contacts: Array<ContactDetail> = [
    {
      name: 'elon',
      title: 'entrepreneur',
      email: 'elon@mars.com',
      role: 'mega-boss'
    },
    {
      name: 'satya',
      title: 'ceo',
      email: 'satya@live.com',
      role: 'ms-boss'
    },
  ];
  return contacts;
});


export default component$(() => {
  const contactList = useContactLoader();

  return (
    <>
      <ContactsCmp contacts={contactList.value}/>
    </>
  )
});