
// Representamos el tablero de Sudoku como un array de 81 elementos (9x9)
// Cada celda puede contener un numero del 1 al 9
fn main(board: [Field; 81], puzzle: pub [Field; 81]) -> pub Field {
    let mut is_valid = Field::from(1);

    for i in 0..81 {
        let puzzle_cell: Field = puzzle[i];
        let solution_cell: Field = board[i];
        let cell_valid: Field = if puzzle_cell == Field::from(0) {
            Field::from(1)
        } else {
            if puzzle_cell == solution_cell {
                Field::from(1)
            } else {
                Field::from(0)
            }
        };
        is_valid = is_valid * cell_valid;
    }
    // Verificar filas
    for i in 0..9 {
        let mut row = [Field::from(0); 9];
        for j in 0..9 {
            row[j] = board[i * 9 + j];
        }
        is_valid = is_valid * verify_group(row);
    }

    // Verificar columnas
    for j in 0..9 {
        let mut col = [Field::from(0); 9];
        for i in 0..9 {
            col[i] = board[i * 9 + j];
        }
        is_valid = is_valid * verify_group(col);
    }

    // Verificar subcuadros 3x3
    for box_row in 0..3 {
        for box_col in 0..3 {
            let mut box_values = [Field::from(0); 9];
            let mut index = 0;
            for i in 0..3 {
                for j in 0..3 {
                    box_values[index] = board[(box_row * 3 + i) * 9 + (box_col * 3 + j)];
                    index += 1;
                }
            }
            is_valid = is_valid * verify_group(box_values);
        }
    }

    is_valid
}

// Funcion auxiliar para verificar que un grupo de 9 numeros contiene todos los numeros del 1 al 9
fn verify_group(group: [Field; 9]) -> Field {
    let mut is_valid: Field = Field::from(1);
    for i in 1..10 {
        let mut found: Field = Field::from(0);
        for j in 0..9 {
            let is_equal: Field = if group[j] == Field::from(i) {
                Field::from(1)
            } else {
                Field::from(0)
            };
            found = found + is_equal;
        }
        is_valid = is_valid
            * if found == Field::from(1) {
                Field::from(1)
            } else {
                Field::from(0)
            };
    }
    is_valid
}

#[test]
fn test_valid_sudoku() {
    let valid_board = [
        Field::from(5),
        Field::from(3),
        Field::from(4),
        Field::from(6),
        Field::from(7),
        Field::from(8),
        Field::from(9),
        Field::from(1),
        Field::from(2),
        Field::from(6),
        Field::from(7),
        Field::from(2),
        Field::from(1),
        Field::from(9),
        Field::from(5),
        Field::from(3),
        Field::from(4),
        Field::from(8),
        Field::from(1),
        Field::from(9),
        Field::from(8),
        Field::from(3),
        Field::from(4),
        Field::from(2),
        Field::from(5),
        Field::from(6),
        Field::from(7),
        Field::from(8),
        Field::from(5),
        Field::from(9),
        Field::from(7),
        Field::from(6),
        Field::from(1),
        Field::from(4),
        Field::from(2),
        Field::from(3),
        Field::from(4),
        Field::from(2),
        Field::from(6),
        Field::from(8),
        Field::from(5),
        Field::from(3),
        Field::from(7),
        Field::from(9),
        Field::from(1),
        Field::from(7),
        Field::from(1),
        Field::from(3),
        Field::from(9),
        Field::from(2),
        Field::from(4),
        Field::from(8),
        Field::from(5),
        Field::from(6),
        Field::from(9),
        Field::from(6),
        Field::from(1),
        Field::from(5),
        Field::from(3),
        Field::from(7),
        Field::from(2),
        Field::from(8),
        Field::from(4),
        Field::from(2),
        Field::from(8),
        Field::from(7),
        Field::from(4),
        Field::from(1),
        Field::from(9),
        Field::from(6),
        Field::from(3),
        Field::from(5),
        Field::from(3),
        Field::from(4),
        Field::from(5),
        Field::from(2),
        Field::from(8),
        Field::from(6),
        Field::from(1),
        Field::from(7),
        Field::from(9),
    ];

    let puzzle = [
        Field::from(5),
        Field::from(3),
        Field::from(0),
        Field::from(0),
        Field::from(7),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(6),
        Field::from(0),
        Field::from(0),
        Field::from(1),
        Field::from(9),
        Field::from(5),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(9),
        Field::from(8),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(6),
        Field::from(0),
        Field::from(8),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(6),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(3),
        Field::from(4),
        Field::from(0),
        Field::from(0),
        Field::from(8),
        Field::from(0),
        Field::from(3),
        Field::from(0),
        Field::from(0),
        Field::from(1),
        Field::from(7),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(2),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(6),
        Field::from(0),
        Field::from(6),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(2),
        Field::from(8),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(4),
        Field::from(1),
        Field::from(9),
        Field::from(0),
        Field::from(0),
        Field::from(5),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(0),
        Field::from(8),
        Field::from(0),
        Field::from(0),
        Field::from(7),
        Field::from(9),
    ];
    assert(main(valid_board, puzzle) == Field::from(1));

    // Tablero de Sudoku invalido (fila duplicada)
    let invalid_board = [
        Field::from(5),
        Field::from(3),
        Field::from(4),
        Field::from(6),
        Field::from(7),
        Field::from(8),
        Field::from(9),
        Field::from(1),
        Field::from(2),
        Field::from(6),
        Field::from(7),
        Field::from(2),
        Field::from(1),
        Field::from(9),
        Field::from(5),
        Field::from(3),
        Field::from(4),
        Field::from(8),
        Field::from(1),
        Field::from(9),
        Field::from(8),
        Field::from(3),
        Field::from(4),
        Field::from(2),
        Field::from(5),
        Field::from(6),
        Field::from(7),
        Field::from(8),
        Field::from(5),
        Field::from(9),
        Field::from(7),
        Field::from(6),
        Field::from(1),
        Field::from(4),
        Field::from(2),
        Field::from(3),
        Field::from(4),
        Field::from(2),
        Field::from(6),
        Field::from(8),
        Field::from(5),
        Field::from(3),
        Field::from(7),
        Field::from(9),
        Field::from(1),
        Field::from(7),
        Field::from(1),
        Field::from(3),
        Field::from(9),
        Field::from(2),
        Field::from(4),
        Field::from(8),
        Field::from(5),
        Field::from(6),
        Field::from(9),
        Field::from(6),
        Field::from(1),
        Field::from(5),
        Field::from(3),
        Field::from(7),
        Field::from(2),
        Field::from(8),
        Field::from(4),
        Field::from(2),
        Field::from(8),
        Field::from(7),
        Field::from(4),
        Field::from(1),
        Field::from(9),
        Field::from(6),
        Field::from(3),
        Field::from(5),
        Field::from(5),
        Field::from(4),
        Field::from(5),
        Field::from(2),
        Field::from(8),
        Field::from(6),
        Field::from(1),
        Field::from(7),
        Field::from(9), // Fila duplicada
    ];

    assert(main(invalid_board, puzzle) == Field::from(0));
}
