import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import DeleteModal from "./DeleteModal.jsx";
import {emptyMockStore} from "../../../test/testData.js";


describe("DeleteModal", () => {
    let closeModalMock;
    let confirmClickMock;

    beforeEach(() => {
        closeModalMock = vi.fn();
        confirmClickMock = vi.fn();
    });

    it("renders correctly with given name", () => {
        render(
            <Provider store={emptyMockStore}>
                <DeleteModal
                    open={true}
                    closeModal={closeModalMock}
                    name="Test Entry"
                    onConfirmClick={confirmClickMock}
                />
            </Provider>
        );

        expect(screen.getByText('Are you sure you wish to delete the "Test Entry" entry?')).toBeInTheDocument();
    });

    it("calls closeModal when Cancel button is clicked", () => {
        render(
            <Provider store={emptyMockStore}>
                <DeleteModal
                    open={true}
                    closeModal={closeModalMock}
                    name="Test Entry"
                    onConfirmClick={confirmClickMock}
                />
            </Provider>
        );

        const cancelButton = screen.getByText("Cancel");
        fireEvent.click(cancelButton);

        expect(closeModalMock).toHaveBeenCalled();
    });

    it("calls onConfirmClick when Confirm button is clicked", () => {
        render(
            <Provider store={emptyMockStore}>
                <DeleteModal
                    open={true}
                    closeModal={closeModalMock}
                    name="Test Entry"
                    onConfirmClick={confirmClickMock}
                />
            </Provider>
        );

        const confirmButton = screen.getByText("Confirm");
        fireEvent.click(confirmButton);

        expect(confirmClickMock).toHaveBeenCalled();
    });

    test("does not render modal when open is false", () => {
        render(
            <Provider store={emptyMockStore}>
                <DeleteModal
                    open={false}
                    closeModal={closeModalMock}
                    name="Test Entry"
                    onConfirmClick={confirmClickMock} />
            </Provider>
        );

        expect(screen.queryByText("Are you sure you wish to delete the \"Test Entry\" entry?")).not.toBeInTheDocument();
    });
});
