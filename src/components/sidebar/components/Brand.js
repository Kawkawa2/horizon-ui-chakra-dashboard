import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";
import '../../../assets/css/App.css'

export function SidebarBrand() {
  return (
    <Flex align='center' direction='column'>
      <div id='logo' >
      </div>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
