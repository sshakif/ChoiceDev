<?php

declare(strict_types=1);

namespace Flat3\Lodata\Helper\DBAL\DBAL4;

use Doctrine\DBAL\Driver\AbstractMySQLDriver;

class MySQLDriver extends AbstractMySQLDriver
{
    use ConnectsToDatabase;
}