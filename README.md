# webApplikasjoner

Innleveringer er gruppert i **øving** mapper med underordnede **oppgave** mapper.

################################################################################################

   .d8888b.  888b    888  .d8888b.       888     888          .d8888b.
  d88P  Y88b 8888b   888 d88P  Y88b      888     888         d88P  Y88b
  888    888 88888b  888 888    888      888     888         888    888
  888        888Y88b 888 888             888     888 888d888 888         8888b.  88888b.
  888        888 Y88b888 888             888     888 888P"   888            "88b 888 "88b
  888    888 888  Y88888 888    888      888     888 888     888    888 .d888888 888  888
  Y88b  d88P 888   Y8888 Y88b  d88P      Y88b. .d88P 888     Y88b  d88P 888  888 888 d88P
   "Y8888P"  888    Y888  "Y8888P"        "Y88888P"  888      "Y8888P"  "Y888888 88888P"
                                                                                  888
                                                                                  888
                                                                                  888
################################################################################################
#									About
################################################################################################
This README is meant to be a source of documentation on the "CNC URCap",
based on the DMH-UR-LIB: master.script.

The "CNC URCap" is made to provide a better end user experience of the already functioning
current solution. By providing polyscope with a more intuitive graphical user interface,
thus streamlining the process of setting up future robot programs for communication
between the UR Robot and the CNC machine.

Made by Seal student group: URCap 2020,
with help from Daniel Christopher Lindquist Nilsen. Engineer. Seal Engineering.

Group Members:
Cezary Kalbarczyk. Student.
Daniel Nikolai Fiko . Student.
Frederik Dahl. Student.

University Faculty:
Haris Jasarevic. Engineer.

Thanks to Seal Engineering, Daniel C. Lindquist Nilsen and Haris Jasarevic for the opportunity
and for providing us with helpful information, technical expertise and resources.

################################################################################################
#									The URCaps Starter Package (short)
################################################################################################
The Starter package is a development environment provided by Universal Robots.
complete with Eclipse Java IDE, URCaps Software Development Kit (SDK) and URSim.

This was our foundation for development, run on a Viritual OS. Featuring a complete framework
for developing, testing and building an URCap. Also provided within:
Extensive documentation with examples from specific use-cases of various aspects of the API.

[Universal Robots+](https://www.universal-robots.com/plus/developer/)

################################################################################################
#									The URCap
################################################################################################
The CNC URCap Beta-1.0.1 (current) is composed of:

##installation
An installation node that provides a user interface to enable/disable Robot Service Call polling
and functionality for the polyscope program screen to insert nodes corresponding to urscript
functions (master.script).
When disabled, no CNC background threads are run and no CNC program nodes are allowed.

##program
A program node service with currently 4 alternative contributions to a robot program:
(ie. CNC: [functionality name] ([urscript eqvivalent]))

CNC: Open Door (executeOpenDoor())
CNC: Close Door (executeCloseDoor())
CNC: Open Chuck (executeUnclamp())
CNC: Close Chuck (executeClamp())

These nodes are selected from a drop-down menu.
In addition, the UI show whether or not the CNC functionality in enabled.

################################################################################################
#									The Java Program
################################################################################################

##Disclaimer
The Jave project use (Version 1.11.0) of the API, with all dependencies already set up
on building a new URCap. Maven functionality already set up for installing on Ursim for testing
or building the project as a .urcap for production.
Universal Robots recommend using the Starter Package as the framework for development
and using the latest version of the API.

##Naming convention
The recommended practice for naming classes is followed throughout the CNC URCap.
While reading the different classes defined in the program, keep that in mind while
considering the general flow of a URCap in polyscope below.

[name of the urcap] [type] [service, contribution or view]
(ie. CNCProgramNodeContribution)

##URCap and the general flow of a program

A URCap is a software bundle, that is operating as a child process of polyscope.
From Universal Robots+ site:

>PolyScope will register the URCap, and interact with the URCap in various ways, e.g. during the
>startup of PolyScope, or based on user interactions in the user interface.

>Each URCap can contribute multiple new functionalities to PolyScope, a such functionality is
>generally referred to as a service. A service could for instance be a Program Node,
>an Installation Node or a Toolbar. As an example, a gripper URCap could include a service which
>is an Installation Node, e.g. for configuring the mounting of and connection to the gripper.
>Another service offered by this URCap could be a program node, which could be used to open the
>gripper, and a similar service, another program node, but for closing the gripper. The fourth
>service could be a toolbar, that allows live control of the gripper. In this way, one URCap is
>offering 4 services to PolyScope; 1 Installation Node Service, 2 Program Node Services
>and 1 Toolbar Service.

