===========================
JSON Viewer
===========================

This widget is an integration of `jQuery json-viewer <https://github.com/abodelot/jquery.json-viewer>`_ by `abodelot <https://github.com/abodelot>`_

Usage
=====

To use this module, you need to decorate xml text field with widget ``ag_json_viewer`` on form view

.. code-block:: xml

    <field>
        <form string="Form name">
            <sheet>
                <group>
                    <field name="my_text_field"/>
                </group>
            </sheet>
        </form>
    </field>

Options
=======

The ``JSON Viewer`` accepts an optional ``options`` argument. The supported options are:

- ``collapsed`` (boolean, default: ``false``): all nodes are collapsed at html generation.
- ``rootCollapsable`` (boolean, default: `true`): allow root element to be collasped.
- ``withQuotes`` (boolean, default: ``false``): all JSON keys are surrounded with double quotation marks (``{"foobar": 1}`` instead of ``{foobar: 1}``).
- ``withLinks`` (boolean, default: ``true``): all values that are valid links will be clickable, if ``false`` they will only be strings.

.. code-block:: xml

 <field name="my_text_field" widget="ag_json_viewer" options="{'collapsed': true,
                                                               'rootCollapsable': false,
                                                               'withQuotes': true,
                                                               'withLinks': false}"/>

About
=====
Authors
~~~~~~~

* Ambition Telecom & Réseaux