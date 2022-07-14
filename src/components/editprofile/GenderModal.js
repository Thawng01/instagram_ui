import { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const items = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Prefer Not To Say" },
];

const GenderModal = ({ visible, onClose, onSelect }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selected, setSelected] = useState();

    const handleSelect = (i, item) => {
        setActiveIndex(i);
        setSelected(item.label);
    };

    const handleDone = () => {
        onSelect(selected);
        onClose();
    };

    if (!visible) return null;
    return (
        <Container id="modal" onClick={onClose}>
            <ModalContainer>
                <Header>
                    <Title>
                        <p>Gender</p>
                    </Title>
                    <Icon>
                        <IoClose id="close-icon" onClick={onClose} />
                    </Icon>
                </Header>

                <Body>
                    <Items>
                        {items.map((item, i) => {
                            return (
                                <Item
                                    key={item.id}
                                    active={i === activeIndex ? true : false}
                                    onClick={() => handleSelect(i, item)}
                                >
                                    <div className="check-box" />
                                    <label>{item.label}</label>
                                </Item>
                            );
                        })}
                    </Items>

                    <Button id="btn" onClick={handleDone}>
                        Done
                    </Button>
                </Body>
            </ModalContainer>
        </Container>
    );
};

export default GenderModal;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
`;

const ModalContainer = styled.div`
    background-color: #fff;
    width: 18rem;
    border-radius: 5px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    height: 40px;
    border-bottom: 0.5px solid lightgray;
`;

const Title = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

const Icon = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-right: 10px;

    #close-icon {
        font-size: 25px;
        cursor: pointer;
    }
`;

const Body = styled.div`
    padding: 20px;
`;

const Items = styled.div`
    margin: 0 0 20px 0;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;

    .check-box {
        border: ${(prop) =>
            prop.active ? "5.5px solid #0095f6" : "2px solid lightgray"};
        width: 18px;
        height: 18px;
        border-radius: 50%;
        margin-right: 7px;
        transition: all 200ms ease-in;
    }
`;

const Button = styled.button`
    background-color: #0095f6;
    padding: 12px;
    border: transparent;
    width: 100%;
    color: #fff;
    border-radius: 5px;
`;
