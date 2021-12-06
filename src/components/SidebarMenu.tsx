import React, { ReactChildren, ReactChild, FC } from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

interface SidebarProps {
  visible: boolean
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
  onHide: any
}

const SidebarMenu: FC<SidebarProps> = ({ visible, children, onHide }) => {
  return (
    <>
      <Sidebar
        animation='overlay'
        onHide={onHide}
        as={Menu}
        visible={visible}
        direction='right'
        vertical
      >
        {children}
      </Sidebar>
    </>
  )
}

export default SidebarMenu
