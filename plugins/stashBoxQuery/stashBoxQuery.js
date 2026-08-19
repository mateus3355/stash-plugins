"use strict";

(function () {
  const { PluginApi } = window;
  const React = PluginApi.React;
  const { Button, Nav } = PluginApi.libraries.Bootstrap;
  const { faDatabase } = PluginApi.libraries.FontAwesomeSolid;
  const { Icon } = PluginApi.components;

  const TOOL_URL = "/plugin/stashBoxQuery/assets/stashdb-query-tool.html";

  // Add a toolbar button (next to Stats/Settings/Help) that opens the
  // StashDB Query Tool in a new tab.
  PluginApi.patch.before("MainNavBar.UtilityItems", function (props) {
    return [
      {
        children: React.createElement(
          React.Fragment,
          null,
          props.children,
          React.createElement(
            Nav.Link,
            {
              className: "nav-utility",
              href: TOOL_URL,
              target: "_blank",
              rel: "noopener noreferrer",
            },
            React.createElement(
              Button,
              {
                className: "minimal d-flex align-items-center h-100",
                title: "StashDB Query Tool",
              },
              React.createElement(Icon, { icon: faDatabase })
            )
          )
        ),
      },
    ];
  });
})();
